import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入ant
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引入全局样式
import '@/assets/style/index.less'

const app = createApp(App)
app.use(Antd)

// 全局注册路由
app.use(router)

app.mount('#app')
