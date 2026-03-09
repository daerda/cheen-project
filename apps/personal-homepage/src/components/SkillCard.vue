<script setup lang="ts">
/**
 * 技能卡片组件
 * 展示技能名称和掌握程度
 */

// 2. Vue API
import { computed } from 'vue'

// 4. Props 定义（必须泛型 + withDefaults）
interface Props {
  /** 技能名称 */
  name: string
  /** 掌握程度（0-100） */
  level: number
  /** 主题色 */
  color: string
}

const props = withDefaults(defineProps<Props>(), {
  level: 0,
  color: '#667eea'
})

// 6. 逻辑组织
const normalizedLevel = computed<number>(() => {
  return Math.min(100, Math.max(0, props.level))
})
</script>

<template>
  <div class="skill-card">
    <div class="skill-header">
      <h3 class="skill-name">{{ props.name }}</h3>
      <span class="skill-level">{{ normalizedLevel }}%</span>
    </div>
    <div class="skill-bar">
      <div 
        class="skill-progress" 
        :style="{ width: normalizedLevel + '%', backgroundColor: props.color }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
}

.skill-level {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

.skill-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}
</style>
