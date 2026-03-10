<script setup lang="ts">
/**
 * 基础按钮组件
 * @example
 * <base-button type="primary" size="medium" @click="handleClick">
 *   点击我
 * </base-button>
 */

/** 按钮类型 */
type ButtonType = 'primary' | 'secondary' | 'danger'
/** 按钮尺寸 */
type ButtonSize = 'small' | 'medium' | 'large'

interface Props {
  /** 按钮类型 */
  type?: ButtonType
  /** 按钮尺寸 */
  size?: ButtonSize
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  /** 点击事件 */
  click: [event: MouseEvent]
}>()

const handleClick = (e: MouseEvent): void => {
  emit('click', e)
}
</script>

<template>
  <button
    class="base-button"
    :class="[props.type, props.size]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Types */
.primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
}

.secondary {
  background: var(--color-gray-100);
  color: #374151;
}

.danger {
  background: #ef4444;
  color: white;
}

/* Sizes */
.small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.base-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
