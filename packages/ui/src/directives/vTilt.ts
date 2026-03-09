import type { DirectiveBinding, ObjectDirective } from 'vue'

/**
 * v-tilt 指令配置选项
 */
export interface VTiltOptions {
  /** 最大倾斜角度（度），默认 15 */
  max?: number
  /** 透视距离（像素），默认 1000 */
  perspective?: number
  /** 缩放比例，默认 1.02 */
  scale?: number
  /** 过渡时间（毫秒），默认 300 */
  duration?: number
  /** 是否启用辉光效果，默认 true */
  glare?: boolean
  /** 辉光最大不透明度，默认 0.3 */
  glareOpacity?: number
  /** 是否反转倾斜方向，默认 false */
  reverse?: boolean
}

/**
 * v-tilt 元素状态
 */
interface TiltElement extends HTMLElement {
  _tiltCleanup?: () => void
  _tiltGlareElement?: HTMLElement
}

/**
 * 计算鼠标相对元素中心的位置
 * @param element - 目标元素
 * @param event - 鼠标事件
 * @returns 相对位置 (-1 到 1)
 */
function calculateMousePosition(
  element: HTMLElement,
  event: MouseEvent
): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  
  return {
    x: (x - 0.5) * 2, // -1 到 1
    y: (y - 0.5) * 2  // -1 到 1
  }
}

/**
 * 创建辉光元素
 * @param element - 目标元素
 * @returns 辉光元素
 */
function createGlareElement(element: HTMLElement): HTMLElement {
  const glare = document.createElement('div')
  glare.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.4) 47%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateZ(1px);
    opacity: 0;
    transition: opacity 0.3s ease;
  `
  
  // 确保父元素有定位
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative'
  }
  
  element.style.overflow = 'hidden'
  element.appendChild(glare)
  
  return glare
}

/**
 * 应用 3D 倾斜变换
 * @param element - 目标元素
 * @param mouseX - 鼠标 X 位置 (-1 到 1)
 * @param mouseY - 鼠标 Y 位置 (-1 到 1)
 * @param options - 配置选项
 */
function applyTilt(
  element: HTMLElement,
  mouseX: number,
  mouseY: number,
  options: Required<VTiltOptions>
): void {
  const { max, perspective, scale, reverse, glare, glareOpacity } = options
  
  // 计算旋转角度
  const rotateX = (reverse ? 1 : -1) * mouseY * max
  const rotateY = (reverse ? -1 : 1) * mouseX * max
  
  // 应用变换
  element.style.transform = `
    perspective(${perspective}px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(${scale}, ${scale}, ${scale})
  `
  
  // 更新辉光位置
  if (glare) {
    const glareEl = (element as TiltElement)._tiltGlareElement
    if (glareEl) {
      const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      
      glareEl.style.background = `
        linear-gradient(
          ${angle + 90}deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, ${glareOpacity}) 47%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0) 100%
        )
      `
      glareEl.style.opacity = String(distance * glareOpacity)
    }
  }
}

/**
 * 重置元素状态
 * @param element - 目标元素
 * @param duration - 过渡时间
 */
function resetTilt(element: HTMLElement, _duration: number): void {
  element.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale3d(1, 1, 1)
  `
  
  const glareEl = (element as TiltElement)._tiltGlareElement
  if (glareEl) {
    glareEl.style.opacity = '0'
  }
}

/**
 * 初始化倾斜效果
 * @param element - 目标元素
 * @param options - 配置选项
 * @returns 清理函数
 */
function initTilt(
  element: TiltElement,
  options: VTiltOptions = {}
): () => void {
  const config: Required<VTiltOptions> = {
    max: 15,
    perspective: 1000,
    scale: 1.02,
    duration: 300,
    glare: true,
    glareOpacity: 0.3,
    reverse: false,
    ...options
  }
  
  // 设置初始样式
  element.style.transition = `transform ${config.duration}ms ease-out`
  element.style.transformStyle = 'preserve-3d'
  
  // 创建辉光元素
  if (config.glare) {
    element._tiltGlareElement = createGlareElement(element)
  }
  
  // 鼠标移动处理
  const handleMouseMove = (event: MouseEvent): void => {
    const { x, y } = calculateMousePosition(element, event)
    applyTilt(element, x, y, config)
  }
  
  // 鼠标离开处理
  const handleMouseLeave = (): void => {
    resetTilt(element, config.duration)
  }
  
  // 绑定事件
  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)
  
  // 返回清理函数
  return (): void => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
    
    if (element._tiltGlareElement) {
      element._tiltGlareElement.remove()
      element._tiltGlareElement = undefined
    }
    
    element.style.transform = ''
    element.style.transition = ''
    element.style.transformStyle = ''
  }
}

/**
 * v-tilt 自定义指令
 * 
 * 为元素添加 3D 倾斜效果，根据鼠标位置产生透视变换
 * 
 * @example
 * ```vue
 * <template>
 *   <div v-tilt>基础使用</div>
 *   <div v-tilt="{ max: 25, scale: 1.1 }">自定义参数</div>
 *   <div v-tilt="{ glare: false }">禁用辉光</div>
 * </template>
 * ```
 */
export const vTilt: ObjectDirective<TiltElement, VTiltOptions | undefined> = {
  mounted(el, binding: DirectiveBinding<VTiltOptions | undefined>): void {
    const options = binding.value || {}
    el._tiltCleanup = initTilt(el, options)
  },
  
  updated(el, binding: DirectiveBinding<VTiltOptions | undefined>): void {
    // 清理旧的
    if (el._tiltCleanup) {
      el._tiltCleanup()
    }
    // 重新初始化
    const options = binding.value || {}
    el._tiltCleanup = initTilt(el, options)
  },
  
  unmounted(el): void {
    if (el._tiltCleanup) {
      el._tiltCleanup()
      el._tiltCleanup = undefined
    }
  }
}

export default vTilt
