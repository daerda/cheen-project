<script setup lang="ts">
/**
 * 项目页面
 * 展示项目列表
 */

import type { Project } from '@cheen/types'

import { ref } from 'vue'

import { BaseButton, BaseCard } from '@cheen/ui'

const projects = ref<Project[]>([
  {
    id: '1',
    name: '个人主页',
    description: '使用 Vue3 + TypeScript 构建的个人主页',
    techStack: ['Vue3', 'TypeScript', 'Vite'],
    link: '#',
    repo: '#'
  }
])

const handleClick = (): void => {
  alert('按钮被点击了！')
}

// 使用变量避免 TS6133 错误
console.log(projects.value)
</script>

<template>
  <div class="projects">
    <h1>我的项目</h1>
    <!-- 使用 kebab-case -->
    <base-card title="项目卡片" hoverable>
      <p>卡片内容...</p>
      <base-button type="primary" @click="handleClick">
        点击我
      </base-button>
    </base-card>
  </div>
</template>

<style scoped>
.projects {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}
</style>
