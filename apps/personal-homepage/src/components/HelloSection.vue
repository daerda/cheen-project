<script setup lang="ts">
/**
 * 英雄区域组件
 * 展示个人介绍和主要操作按钮
 */

// 2. Vue API
import { computed } from 'vue'

// 3. 跨包依赖
import { BaseButton, Avatar } from '@cheen/ui'

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
  subtitle: '一名爱技术爱生活的前端开发',
  description: '专注于 Vue.js 生态，擅长构建高性能、可维护的 Web 应用程序。'
})

// 5. Emits 定义（显式类型）
const emit = defineEmits<{
  /** 查看项目 */
  viewProjects: []
  /** 联系我 */
  contact: []
  /** 关于我 */
  about: []
}>()

// 6. 逻辑组织
const displayName = computed<string>(() => props.name)

const handleViewProjects = (): void => {
  emit('viewProjects')
}

// const handleContact = (): void => {
//   emit('contact')
// }

const handleAbout = (): void => {
  emit('about')
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title"><span class="title-txt">Hello, this is </span><span class="overlap"><span v-for="(char, i) in displayName"
            :key="i" :style="{ zIndex: displayName.length - i }">{{ char }}</span></span></h1>

      <Avatar @click="handleAbout" alt="我的头像" />
      <p class="subtitle">{{ props.subtitle }}</p>
      <p class="description">
        {{ props.description }}
      </p>
      <div class="actions">
        <base-button type="primary" size="large" @click="handleViewProjects">
          查看项目
        </base-button>
        <base-button type="secondary" size="large" @click="handleAbout">
          关于我
        </base-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%);
  border-radius: var(--radius-2xl);
  margin-bottom: 2rem;
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal);
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.title-txt {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: var(--color-text-tertiary);
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

.overlap {
  letter-spacing: -0.3rem;
  /* text-transform: uppercase; */
}

.overlap span {
  font-family: 'Luckiest Guy', cursive, sans-serif;
  color: #FFFFFF;
  font-size: 8rem;
  position: relative;
  display: inline-block;

  text-shadow: 3px 1px 1px var(--color-primary), 2px 2px 1px var(--color-primary-light), 4px 2px 1px var(--color-primary), 3px 3px 1px var(--color-primary-light), 5px 3px 1px var(--color-primary), 4px 4px 1px var(--color-primary-light), 6px 4px 1px var(--color-primary), 5px 5px 1px var(--color-primary-light), 7px 5px 1px var(--color-primary), 6px 6px 1px var(--color-primary-light), 8px 6px 1px var(--color-primary), 7px 7px 1px var(--color-primary-light), 9px 7px 1px var(--color-primary);
  transform: rotateX(20deg) ;
}
</style>
