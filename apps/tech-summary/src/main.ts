import { createApp } from 'vue'
import App from './App.vue'
// 导入全局 CSS 变量（必须先于其他样式导入）
import '@cheen/shared/variables.css'
import './assets/style.css'

const app = createApp(App)
app.mount('#app')
