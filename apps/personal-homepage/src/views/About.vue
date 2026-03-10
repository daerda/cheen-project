<script setup lang="ts">
/**
 * 关于页面
 * 展示个人信息
 */

// 1. 类型导入在前
import type { User } from '@cheen/types'

// 3. 跨包依赖
import { BaseCard } from '@cheen/ui'

// 6. 逻辑组织（示例数据）
const userInfo: User = {
  id: '1',
  name: 'Cheen',
  email: 'cheen@example.com',
  role: 'user',
  createdAt: new Date('2026-03-01')
}
</script>

<template>
  <div class="about">
    <!-- 使用 kebab-case -->
    <base-card :title="'关于 ' + userInfo.name" hoverable>
      <h1>关于我</h1>
      <p>这里是关于页面的内容...</p>
      <p>邮箱：{{ userInfo.email }}</p>
    </base-card>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}
</style>
