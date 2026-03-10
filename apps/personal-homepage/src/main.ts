import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局 CSS 变量（必须先于其他样式导入）
import '@cheen/shared/variables.css'
// 导入 iconfont 图标字体
import '@cheen/shared/iconfont.css'
import './assets/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
