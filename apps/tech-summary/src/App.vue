<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import TagFilter from './components/TagFilter.vue'

interface Article {
  id: number
  title: string
  summary: string
  tags: string[]
  date: string
  readTime: string
}

const articles = ref<Article[]>([
  {
    id: 1,
    title: 'Vue 3 Composition API 最佳实践',
    summary: '深入探讨 Vue 3 Composition API 的使用技巧，包括 reactive、ref、computed 等核心概念的实际应用。',
    tags: ['Vue.js', '前端'],
    date: '2024-03-01',
    readTime: '10 分钟'
  },
  {
    id: 2,
    title: 'TypeScript 高级类型详解',
    summary: '学习 TypeScript 的高级类型系统，包括泛型、条件类型、映射类型等强大特性。',
    tags: ['TypeScript', '编程语言'],
    date: '2024-02-20',
    readTime: '15 分钟'
  },
  {
    id: 3,
    title: 'Vite 构建工具深度解析',
    summary: '了解 Vite 的工作原理，以及如何利用 Vite 提升前端开发效率和构建性能。',
    tags: ['Vite', '工具'],
    date: '2024-02-10',
    readTime: '8 分钟'
  },
  {
    id: 4,
    title: 'Monorepo 项目管理实战',
    summary: '使用 pnpm workspace 构建和管理前端 Monorepo 项目，提升代码复用和协作效率。',
    tags: ['工程化', 'Monorepo'],
    date: '2024-01-28',
    readTime: '12 分钟'
  }
])

const allTags = ref(['全部', 'Vue.js', 'TypeScript', '前端', '工具', '编程语言', '工程化', 'Monorepo'])
const selectedTag = ref('全部')

const filteredArticles = ref<Article[]>(articles.value)

const handleTagSelect = (tag: string) => {
  selectedTag.value = tag
  if (tag === '全部') {
    filteredArticles.value = articles.value
  } else {
    filteredArticles.value = articles.value.filter(article => article.tags.includes(tag))
  }
}
</script>

<template>
  <div class="tech-summary">
    <header class="header">
      <div class="header-content">
        <h1 class="logo">📚 技术总结</h1>
        <p class="subtitle">记录学习，分享知识</p>
      </div>
    </header>

    <main class="main">
      <TagFilter 
        :tags="allTags" 
        :selected="selectedTag"
        @select="handleTagSelect"
      />

      <div class="articles-grid">
        <ArticleCard 
          v-for="article in filteredArticles" 
          :key="article.id"
          :title="article.title"
          :summary="article.summary"
          :tags="article.tags"
          :date="article.date"
          :read-time="article.readTime"
        />
      </div>

      <div v-if="filteredArticles.length === 0" class="empty-state">
        <p>该分类下暂无文章</p>
      </div>
    </main>

    <footer class="footer">
      <p>持续学习，持续进步</p>
    </footer>
  </div>
</template>

<style scoped>
.tech-summary {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.logo {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: #718096;
  font-size: 1.1rem;
}

.footer {
  background: #2d3748;
  color: white;
  text-align: center;
  padding: 1.5rem;
}
</style>
