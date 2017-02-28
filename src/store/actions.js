import { fetchLogin } from './fetch'

// const LOAD_MORE_STEP = 10

export function FETCH_LOGIN ({ commit, state }, { userCode, password }) {
  return fetchLogin(userCode, password).then(user => commit('SET_USER', { user }))
}
