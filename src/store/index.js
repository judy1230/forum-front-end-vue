import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'
//import users from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    // 新增 token 屬性
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一並將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        //呼叫userAPI.getCurrentUser()方法,並將response顯示出來
        const { data: { profile }, statusText } = await usersAPI.get()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        commit('setCurrentUser', {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.image,
          isAdmin: profile.isAdmin
        })
        return true
      } catch (error) {
        console.error('can not fetch user information')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
       }
    }
  },
  modules: {
  }
})
