// 类型导入在前
import type { App } from 'vue'

// Vue API
import { defineAsyncComponent } from 'vue'

// 导入指令
import { vTilt } from './directives/vTilt.js'

// 导出指令和类型
export { vTilt }
export type { VTiltOptions } from './directives/vTilt.js'

// 同步导出基础组件
export { default as BaseButton } from './components/BaseButton.vue'
export { default as BaseCard } from './components/BaseCard.vue'
export { default as TiltCard } from './components/TiltCard.vue'

// 异步导出大组件（优化初始加载）
export const LazyBaseModal = defineAsyncComponent(
  () => import('./components/BaseModal.vue')
)

/**
 * 组件库插件安装函数
 * @param app - Vue 应用实例
 */
export function install(app: App): void {
  // 注册组件
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
  app.component('TiltCard', TiltCard)
  
  // 注册指令
  app.directive('tilt', vTilt)
}

// 默认导出
export default { install }

// 基础组件（用于 install 函数）
import BaseButton from './components/BaseButton.vue'
import BaseCard from './components/BaseCard.vue'
import TiltCard from './components/TiltCard.vue'
