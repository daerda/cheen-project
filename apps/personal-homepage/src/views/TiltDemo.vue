<script setup lang="ts">
/**
 * v-tilt 指令演示页面
 * 展示 3D 倾斜效果的各种用法
 */

import type { VTiltOptions } from '@cheen/ui'

import { ref } from 'vue'

import { TiltCard, vTilt } from '@cheen/ui'

// 不同配置示例
const basicOptions = ref<VTiltOptions>({
  max: 15,
  scale: 1.02,
  glare: true
})

// 避免未使用变量警告
console.log(basicOptions.value)

const intenseOptions = ref<VTiltOptions>({
  max: 25,
  scale: 1.05,
  glare: true,
  glareOpacity: 0.4
})

const subtleOptions = ref<VTiltOptions>({
  max: 5,
  scale: 1.01,
  glare: false
})

const reverseOptions = ref<VTiltOptions>({
  max: 20,
  scale: 1.03,
  reverse: true,
  glare: true
})

const projectCards = ref([
  { 
    id: 1, 
    title: 'Vue3 组件库', 
    desc: '基于 TypeScript 的企业级组件库',
    tech: ['Vue3', 'TS', 'Vite'],
    color: '#42b883'
  },
  { 
    id: 2, 
    title: '个人博客', 
    desc: '支持 Markdown 的静态博客系统',
    tech: ['Nuxt', 'Tailwind', 'Prisma'],
    color: '#3178c6'
  },
  { 
    id: 3, 
    title: '数据可视化', 
    desc: '实时数据大屏展示平台',
    tech: ['ECharts', 'D3.js', 'WebSocket'],
    color: '#e74c3c'
  }
])
</script>

<template>
  <div class="tilt-demo">
    <!-- 基础示例 -->
    <section class="demo-section">
      <h2>基础效果</h2>
      <p class="section-desc">鼠标悬停在卡片上，观察 3D 倾斜效果</p>
      
      <div class="cards-grid">
        <tilt-card title="默认配置">
          <p>默认 15° 倾斜，轻微放大，带辉光效果</p>
        </tilt-card>
        
        <tilt-card title="强烈效果" :tilt-options="intenseOptions">
          <p>25° 倾斜，更明显的放大和辉光</p>
        </tilt-card>
        
        <tilt-card title="微妙效果" :tilt-options="subtleOptions">
          <p>5° 倾斜，无辉光，更内敛</p>
        </tilt-card>
        
        <tilt-card title="反向倾斜" :tilt-options="reverseOptions">
          <p>反转倾斜方向，创造凹陷效果</p>
        </tilt-card>
      </div>
    </section>
    
    <!-- 项目卡片展示 -->
    <section class="demo-section">
      <h2>项目展示</h2>
      <p class="section-desc">使用 v-tilt 指令的项目卡片</p>
      
      <div class="projects-showcase">
        <div
          v-for="project in projectCards"
          :key="project.id"
          v-tilt="{ max: 20, scale: 1.03, glare: true }"
          class="project-card"
          :style="{ '--accent-color': project.color }"
        >
          <div class="project-header">
            <h3>{{ project.title }}</h3>
          </div>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="tech-stack">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 使用说明 -->
    <section class="demo-section">
      <h2>使用说明</h2>
      <div class="code-example">
        <h4>安装</h4>
        <pre><code>import { vTilt, TiltCard } from '@cheen/ui'</code></pre>
        
        <h4>方式一：使用组件</h4>
        <pre><code>&lt;tilt-card title="标题" :tilt-options="{ max: 25 }"&gt;
  内容
&lt;/tilt-card&gt;</code></pre>
        
        <h4>方式二：使用指令</h4>
        <pre><code>&lt;div v-tilt="{ max: 20, scale: 1.05 }"&gt;
  任何元素都可以添加倾斜效果
&lt;/div&gt;</code></pre>
        
        <h4>配置选项</h4>
        <table class="options-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>类型</th>
              <th>默认</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>max</td>
              <td>number</td>
              <td>15</td>
              <td>最大倾斜角度（度）</td>
            </tr>
            <tr>
              <td>perspective</td>
              <td>number</td>
              <td>1000</td>
              <td>透视距离（像素）</td>
            </tr>
            <tr>
              <td>scale</td>
              <td>number</td>
              <td>1.02</td>
              <td>悬停时的缩放比例</td>
            </tr>
            <tr>
              <td>glare</td>
              <td>boolean</td>
              <td>true</td>
              <td>是否启用辉光效果</td>
            </tr>
            <tr>
              <td>glareOpacity</td>
              <td>number</td>
              <td>0.3</td>
              <td>辉光最大不透明度</td>
            </tr>
            <tr>
              <td>reverse</td>
              <td>boolean</td>
              <td>false</td>
              <td>是否反转倾斜方向</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tilt-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.demo-section {
  margin-bottom: 4rem;
}

.demo-section h2 {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.section-desc {
  color: #666;
  margin-bottom: 1.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.projects-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--accent-color);
}

.project-header h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.project-desc {
  color: #aaa;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--accent-color);
}

.code-example {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
}

.code-example h4 {
  margin: 1.5rem 0 0.5rem 0;
  color: #333;
}

.code-example h4:first-child {
  margin-top: 0;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0.5rem 0;
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}

.options-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.options-table th,
.options-table td {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
}

.options-table th {
  font-weight: 600;
  color: #333;
  background: #edf2f7;
}

.options-table td {
  color: #666;
}

.options-table code {
  background: #e2e8f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #2d3748;
}
</style>
