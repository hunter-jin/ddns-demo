import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Vuex is auto installed on the web
/*eslint-disable*/
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    // user: { userId: 1001, userCode: 'ZhangSan', userName: '张三' }
    user: {}
  },

  getters: {
    // 是否登录
    loggedIn (state) {
      const { user } = state
      return user.userId ? true  : false
    },
    // 当前登录用户
    loggedUser (state) {
      const { user } = state
      return user
    }
  }
})

export default store
