<script setup lang="ts">
/**
 * 英雄区域组件
 * 展示个人介绍和主要操作按钮
 */

// 2. Vue API
import { computed } from 'vue'
import { useRouter } from 'vue-router'

// 3. 跨包依赖
import { BaseButton } from '@cheen/ui'

// 4. Props 定义（必须泛型 + withDefaults）
interface Props {
  /** 用户名 */
  name: string
  /** 副标题 */
  subtitle?: string
  /** 描述文本 */
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '一名热爱技术的前端开发者',
  description: '专注于 Vue.js 生态，擅长构建高性能、可维护的 Web 应用程序。'
})

// 5. Emits 定义（显式类型）
const emit = defineEmits<{
  /** 查看项目 */
  viewProjects: []
  /** 联系我 */
  contact: []
}>()

// 6. 逻辑组织
const displayName = computed<string>(() => props.name)

const router = useRouter()

const handleViewProjects = (): void => {
  router.push('/projects')
}

const handleContact = (): void => {
  emit('contact')
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">你好，我是 {{ displayName }}</h1>
      <p class="subtitle">{{ props.subtitle }}</p>
      <p class="description">
        {{ props.description }}
      </p>
      <div class="actions">
        <!-- 使用 kebab-case 作为 HTML 规范 -->
        <base-button type="primary" size="large" @click="handleViewProjects">
          查看项目
        </base-button>
        <base-button type="secondary" size="large" @click="handleContact">
          联系我
        </base-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  margin-bottom: 2rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  color: #4a5568;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
