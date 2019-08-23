// 此文件相当于封装router模块
// 安装，导入，注册，实例化，导出,再在main.js中引入
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'ligin', component: Login },
    { path: '/', name: 'home', component: Home }

  ]
})

// 导出router实例对象
export default router
