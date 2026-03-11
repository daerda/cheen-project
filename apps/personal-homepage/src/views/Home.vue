<script setup lang="ts">
/**
 * 首页视图
 * 展示个人介绍和技能列表
 */

// import type { Skill } from '@cheen/types'

import { ref } from 'vue'

import { TiltCard } from '@cheen/ui'

// 本地组件
import HelloSection from '@/components/HelloSection.vue'
// import SkillCard from '@/components/SkillCard.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 5. 类型定义
interface GitHubProject {
  name: string
  description: string
  url: string
  icon: string,
  tiltOptions?: Record<string, any>
}

// 6. 逻辑组织
// const skills = ref<Skill[]>([
//   { name: 'Vue.js', level: 90, color: '#42b883' },
//   { name: 'TypeScript', level: 85, color: '#3178c6' },
//   { name: 'Vite', level: 80, color: '#646cff' },
//   { name: 'Node.js', level: 75, color: '#339933' }
// ])

const githubProjects = ref<GitHubProject[]>([
  {
    name: '个人主页（本项目）',
    description: '个人主页项目，Monorepo 架构',
    url: 'https://github.com/daerda/cheen-project',
    icon: '&#xe885;',
    tiltOptions: {
      max: 20,
      scale: 1.1,
      glare: true,
      reverse: true
    }
  },
  {
    name: '虚拟列表',
    description: '虚拟列表组件，支持大数据量渲染',
    url: 'https://github.com/daerda/cheen-virtuallist',
    icon: '&#xe885;'
  },
  {
    name: 'Defer 优化',
    description: 'JavaScript 延迟加载优化工具库',
    url: 'https://github.com/daerda/cheen-defer',
    icon: '&#xe885;'
  },
  {
    name: 'MCP 安全依赖审计',
    description: 'MCP 前端安全依赖审计工具',
    url: 'https://github.com/daerda/mcp-audit',
    icon: '&#xe885;'
  },
])

// 给 projects-section 添加 ref
const projectsSectionRef = ref<HTMLElement | null>(null)

// 滚动到 GitHub 项目区域
const scrollToProjects = () => {
  projectsSectionRef.value?.scrollIntoView({ behavior: 'smooth' })
}

// 打开 GitHub 链接
const openGitHub = (url: string) => {
  window.open(url, '_blank')
}

const toAbout = () => {
  router.push('/about')
}
</script>

<template>
  <div class="home">
    <!-- 使用 kebab-case -->
    <hello-section name="Cheen" @view-projects="scrollToProjects" @about="toAbout"/>

    <section ref="projectsSectionRef" class="projects-section">
      <h2><i class="iconfont icon-github" style="font-size: 1.8rem;">&#xe885;</i> GitHub 项目</h2>
      <div class="projects-grid">
        <tilt-card
          v-for="project in githubProjects"
          :key="project.name"
          :title="project.name"
          :tiltOptions="project.tiltOptions || { max: 15, scale: 1.1, glare: true }"
          class="project-card"
          @click="openGitHub(project.url)"
        >
          <div class="project-content">
            <p class="project-description">{{ project.description }}</p>
          </div>
          <template #footer>
            <div class="project-footer">
              <i class="iconfont icon-github">&#xe885;</i>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {{ project.url }}
              </a>
            </div>
          </template>
        </tilt-card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.skills-section {
  margin-top: 3rem;
}

.skills-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.projects-section {
  margin-top: 4rem;
  padding-bottom: 3rem;
}

.projects-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.project-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}

.project-icon {
  font-size: 48px;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.project-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.9rem;
}

.project-footer .iconfont {
  font-size: 18px;
}
</style>
