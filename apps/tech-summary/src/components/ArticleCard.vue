<script setup lang="ts">
interface Props {
  title: string
  summary: string
  tags: string[]
  date: string
  readTime: string
}

defineProps<Props>()
</script>

<template>
  <article class="article-card">
    <div class="card-content">
      <h2 class="title">{{ title }}</h2>
      <p class="summary">{{ summary }}</p>
      <div class="tags">
        <span 
          v-for="tag in tags" 
          :key="tag" 
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
      <div class="meta">
        <span class="date">📅 {{ date }}</span>
        <span class="read-time">⏱️ {{ readTime }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 1.5rem;
}

.title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.summary {
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #a0aec0;
}

.date, .read-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
