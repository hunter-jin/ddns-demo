import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

// 安装插件
Vue.use(Router)

export default new Router({
  mode: 'abstract',
  routes: [
    { path: '/login', component: LoginView, meta: { auth: false } },
    { path: '/home', component: HomeView, meta: { auth: true } },
    { path: '/', redirect: '/home' }
  ]
})

