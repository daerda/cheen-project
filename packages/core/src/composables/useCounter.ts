import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

/**
 * useCounter 返回值类型
 */
export interface UseCounterReturn {
  /** 当前计数 */
  count: Ref<number>
  /** 双倍计数 */
  double: ComputedRef<number>
  /** 增加 */
  increment: () => void
  /** 减少 */
  decrement: () => void
  /** 重置 */
  reset: () => void
}

/**
 * 计数器 Composable
 * @param initialValue - 初始值，默认 0
 * @returns 计数器相关状态和操作
 * 
 * @example
 * ```ts
 * const { count, double, increment } = useCounter(10)
 * ```
 */
export function useCounter(initialValue: number = 0): UseCounterReturn {
  const count = ref<number>(initialValue)
  
  const double = computed<number>(() => count.value * 2)
  
  const increment = (): void => {
    count.value++
  }
  
  const decrement = (): void => {
    count.value--
  }
  
  const reset = (): void => {
    count.value = initialValue
  }
  
  return {
    count,
    double,
    increment,
    decrement,
    reset
  }
}
