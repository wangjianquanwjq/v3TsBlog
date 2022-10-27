import { createApp } from 'vue'
import './style.css'
import '@/assets/css/common.less'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router).mount('#app')
