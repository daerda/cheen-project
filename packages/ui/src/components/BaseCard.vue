<script setup lang="ts">
/**
 * 基础卡片组件
 * @example
 * <base-card title="卡片标题" hoverable>
 *   卡片内容
 * </base-card>
 */

interface Props {
  /** 卡片标题 */
  title?: string
  /** 是否可悬停 */
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: false
})
</script>

<template>
  <div class="base-card" :class="{ hoverable: props.hoverable }">
    <h3 v-if="props.title" class="card-title">{{ props.title }}</h3>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.base-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
}

.base-card.hoverable:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-title {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.25rem;
}

.card-content {
  color: #666;
}
</style>
