import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './style.css'
import '@/assets/css/common.less'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
