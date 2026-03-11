<script setup lang="ts">
/**
 * 关于页面
 * 展示个人信息
 */

// 1. 类型导入在前
import type { User } from '@cheen/types'
// 3. 跨包依赖
import { Avatar, BaseCard } from '@cheen/ui'

// 6. 逻辑组织（示例数据）
const userInfo: User = {
  id: '1',
  name: 'Cheen',
  email: 'w1214647657@163.com',
  qq: '1214647657',
  wechat: 'shisuiiiiii',
  role: 'user',
  bio: '6年前端开发与工程化经验，专注复杂 B 端 SaaS 系统与多端架构。<br/>主导过商户经营操作系统与全域营销中台从0到1建设，服务20+市场，数千商户。  ',
  createdAt: new Date('2026-03-01')
}
</script>

<template>
  <div class="about">
    <!-- 使用 kebab-case -->
    <base-card :title="'关于 ' + userInfo.name" hoverable>
      <!-- <h1>关于我</h1> -->
       <Avatar/>
      <p v-html="userInfo.bio"></p>
      <div class="info-container">
        <p class="info">邮箱：<a @click.prevent="() => {}" href="#">{{ userInfo.email }}</a></p>
        <p class="info">Q Q：<a @click.prevent="() => {}" href="#">{{ userInfo.qq }}</a></p>
        <p class="info">微信：<a @click.prevent="() => {}" href="#">{{ userInfo.wechat }}</a></p>
      </div>
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
.info-container{
  margin: 0 auto;
  width: 50%;
  min-width: 500px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.info {
  margin-top: 1rem;
  color: #666;
  text-align: left;
}
</style>
