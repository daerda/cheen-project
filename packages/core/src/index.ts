/**
 * Cheen Core - 共享业务逻辑 Composables
 * 
 * 规则：
 * 1. 文件命名：useFeature.ts（小写驼峰）
 * 2. 必须返回对象，解构友好
 * 3. SSR 安全：浏览器 API 使用 typeof window !== 'undefined' 检查
 * 4. 副作用清理：使用 onScopeDispose 清理
 */

// 导出所有 composables
export { useCounter } from './composables/useCounter.js'

// 类型导出
export type { UseCounterReturn } from './composables/useCounter.js'
