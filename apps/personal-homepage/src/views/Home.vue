<script setup lang="ts">
/**
 * 首页视图
 * 展示个人介绍和技能列表
 */

// 1. 类型导入在前
import type { Skill } from '@cheen/types'

// 2. Vue API
import { ref } from 'vue'

// 4. 本地组件
import HelloSection from '@/components/HelloSection.vue'
import SkillCard from '@/components/SkillCard.vue'

// 6. 逻辑组织
const skills = ref<Skill[]>([
  { name: 'Vue.js', level: 90, color: '#42b883' },
  { name: 'TypeScript', level: 85, color: '#3178c6' },
  { name: 'Vite', level: 80, color: '#646cff' },
  { name: 'Node.js', level: 75, color: '#339933' }
])
</script>

<template>
  <div class="home">
    <!-- 使用 kebab-case -->
    <hello-section name="Cheen" />
    
    <section class="skills-section">
      <h2><i class="iconfont icon-skills icon-lg icon-primary">&#xe71f;</i> 技能专长</h2>
      <div class="skills-grid">
        <!-- 使用 kebab-case -->
        <skill-card 
          v-for="skill in skills" 
          :key="skill.name"
          :name="skill.name"
          :level="skill.level"
          :color="skill.color"
        />
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
</style>
