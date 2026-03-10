<script setup lang="ts">
/**
 * 应用根组件
 * 提供全局布局和导航
 */

// 2. Vue API
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 6. 逻辑组织
const route = useRoute()
const currentRoute = computed<string>(() => route.path)

// 主题切换
const isDark = ref(false)

// 初始化主题（从 localStorage 读取或检测系统偏好）
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
}

// 应用主题到 document
const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

// 使用变量避免 TS6133 错误
console.log(currentRoute.value)
</script>

<template>
  <div class="homepage">
    <header class="header">
      <nav class="nav">
        <!-- 使用 kebab-case -->
        <router-link to="/" class="logo">🍊Cheen🍊</router-link>
        <div class="nav-right">
          <div class="nav-links">
            <router-link to="/">首页</router-link>
            <router-link to="/about">关于</router-link>
            <router-link to="/projects">项目</router-link>
            <router-link to="/tilt">3D 效果</router-link>
          </div>
          <!-- 主题切换按钮 -->
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到亮色模式' : '切换到暗色模式'">
            <i v-if="isDark" class="iconfont icon-sun theme-icon">&#xe635;</i>
            <i v-else class="iconfont icon-moon theme-icon">&#xe611;</i>
          </button>
        </div>
      </nav>
    </header>
    
    <main class="main">
      <router-view />
    </main>
    
    <footer class="footer">
      <p>&copy; 2026 Cheen. All rights reserved.</p>
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
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

/* 主题切换按钮 */
.theme-toggle {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-full);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 1.2rem;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-icon {
  line-height: 1;
  font-size: 1.2rem;
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
