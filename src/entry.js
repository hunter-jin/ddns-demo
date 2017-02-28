import App from './App.vue'
import store from './store'
import router from './routers'

// 安装导航钩子
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // 未登录跳到登录页
    if (!store.getters.loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/*eslint-disable*/
new Vue({ el: '#root', router, store, ...App})
// new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/')
