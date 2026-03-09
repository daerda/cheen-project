<script setup lang="ts">
/**
 * 应用根组件
 * 提供全局布局和导航
 */

// 2. Vue API
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 6. 逻辑组织
const route = useRoute()
const currentRoute = computed<string>(() => route.path)

// 使用变量避免 TS6133 错误
console.log(currentRoute.value)
</script>

<template>
  <div class="homepage">
    <header class="header">
      <nav class="nav">
        <!-- 使用 kebab-case -->
        <router-link to="/" class="logo">Cheen</router-link>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/projects">项目</router-link>
          <router-link to="/tilt">3D 效果</router-link>
        </div>
      </nav>
    </header>
    
    <main class="main">
      <router-view />
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 Cheen. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1.5rem;
}
</style>
