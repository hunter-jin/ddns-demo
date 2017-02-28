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
    user: { userId: 1001, userCode: 'ZhangSan', userName: '张三' }
    // user: {}
  },

  getters: {
    loggedIn (state) {
      const { user } = state
      console.log(user)
      console.log(user ? true : false)
      return user ? true  : false
    },
    loggedUser (state) {
      const { user } = state
      return user
    }
  }
})

export default store
