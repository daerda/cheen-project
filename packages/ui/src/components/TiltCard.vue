<script setup lang="ts">
/**
 * 3D 倾斜卡片组件
 * 
 * 内置 v-tilt 指令的卡片组件，支持丰富的自定义选项
 * 
 * @example
 * ```vue
 * <tilt-card title="项目" :tilt-options="{ max: 25, scale: 1.05 }">
 *   卡片内容
 * </tilt-card>
 * ```
 */

// 1. 类型导入
import type { VTiltOptions } from '../directives/vTilt.js'

// 2. Vue API
import { vTilt } from '../directives/vTilt.js'

// 4. Props 定义
interface Props {
  /** 卡片标题 */
  title?: string
  /** 自定义 v-tilt 配置 */
  tiltOptions?: VTiltOptions
  /** 卡片宽度 */
  width?: string
  /** 卡片高度 */
  height?: string
  /** 背景色 */
  bgColor?: string
  /** 圆角大小 */
  borderRadius?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  tiltOptions: () => ({
    max: 15,
    scale: 1.02,
    glare: true
  }),
  width: '300px',
  height: 'auto',
  bgColor: 'white',
  borderRadius: '12px'
})
</script>

<template>
  <div
    v-tilt="props.tiltOptions"
    class="tilt-card"
    :style="{
      width: props.width,
      height: props.height,
      backgroundColor: props.bgColor,
      borderRadius: props.borderRadius
    }"
  >
    <div class="card-inner">
      <h3 v-if="props.title" class="card-title">{{ props.title }}</h3>
      <div class="card-content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tilt-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;
  will-change: transform;
}

.card-inner {
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.card-title {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.card-content {
  color: #666;
  line-height: 1.6;
}

.card-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
</style>
