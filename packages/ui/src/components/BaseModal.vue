<script setup lang="ts">
/**
 * 基础模态框组件
 * @example
 * <base-modal :visible="isVisible" title="提示" @close="closeModal">
 *   模态框内容
 * </base-modal>
 */

interface Props {
  /** 是否可见 */
  visible: boolean
  /** 标题 */
  title?: string
  /** 是否显示遮罩 */
  mask?: boolean
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  mask: true,
  maskClosable: true
})

const emit = defineEmits<{
  /** 关闭事件 */
  close: []
  /** 确认事件 */
  confirm: []
}>()

const handleMaskClick = (): void => {
  if (props.maskClosable) {
    emit('close')
  }
}

const handleClose = (): void => {
  emit('close')
}

const handleConfirm = (): void => {
  emit('confirm')
}
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="props.visible" class="modal-wrapper">
        <!-- 遮罩 -->
        <div v-if="props.mask" class="modal-mask" @click="handleMaskClick"></div>
        
        <!-- 内容区域 -->
        <div class="modal-content">
          <div class="modal-header">
            <h3 v-if="props.title" class="modal-title">{{ props.title }}</h3>
            <button class="modal-close" @click="handleClose">&times;</button>
          </div>
          
          <div class="modal-body">
            <slot />
          </div>
          
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn-cancel" @click="handleClose">取消</button>
              <button class="btn-confirm" @click="handleConfirm">确认</button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  z-index: 1001;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.3s;
}

.modal-close:hover {
  background: var(--color-gray-100);
  color: #333;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel,
.btn-confirm {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-cancel {
  background: var(--color-gray-100);
  border: 1px solid #e2e8f0;
  color: #666;
}

.btn-cancel:hover {
  background: #e2e8f0;
}

.btn-confirm {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border: none;
  color: white;
}

.btn-confirm:hover {
  opacity: 0.9;
}

/* 过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95);
}
</style>
