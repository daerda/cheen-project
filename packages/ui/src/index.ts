// 类型导入在前
import type { App } from 'vue'

// Vue API
import { defineAsyncComponent } from 'vue'

// 同步导出基础组件
import BaseButton from './components/BaseButton.vue'
import BaseCard from './components/BaseCard.vue'

export { BaseButton, BaseCard }

// 异步导出大组件（优化初始加载）
export const LazyBaseModal = defineAsyncComponent(
  () => import('./components/BaseModal.vue')
)

/**
 * 组件库插件安装函数
 * @param app - Vue 应用实例
 */
export function install(app: App): void {
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
}

// 默认导出
export default { install }
