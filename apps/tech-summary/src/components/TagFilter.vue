<script setup lang="ts">
interface Props {
  tags: string[]
  selected: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', tag: string): void
}>()

const handleClick = (tag: string) => {
  emit('select', tag)
}
</script>

<template>
  <div class="tag-filter">
    <span class="filter-label">筛选:</span>
    <div class="tags-container">
      <button
        v-for="tag in tags"
        :key="tag"
        class="filter-tag"
        :class="{ active: selected === tag }"
        @click="handleClick(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.tag-filter {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.filter-label {
  font-weight: 600;
  color: #4a5568;
  white-space: nowrap;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  padding: 0.5rem 1rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #4a5568;
}

.filter-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-tag.active {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  border-color: transparent;
}
</style>
