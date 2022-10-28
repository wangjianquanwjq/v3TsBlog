import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css/animate.min.css' //引入
// import 'animate.css' //这是官方的引入，但是会用不了
import './style.css'
import '@/assets/css/common.less'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
