import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import StatusView from '../views/StatusView.vue'
import StatistView from '../views/StatistView.vue'

// 安装插件
Vue.use(Router)

export default new Router({
  mode: 'abstract',
  routes: [
    // 登录页面
    { path: '/login', component: LoginView, meta: { auth: false } },
    // 主页
    { path: '/home', component: HomeView, meta: { auth: true } },
    // 客户
    { path: '/customer', component: CustomerView, meta: { auth: true } },
    // 状态
    { path: '/customer', component: StatusView, meta: { auth: true } },
    // 统计
    { path: '/statist', component: StatistView, meta: { auth: true } },
    // 重定向
    { path: '/', redirect: '/home' }
  ]
})
