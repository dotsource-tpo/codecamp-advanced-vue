// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    userId: undefined,
    userName: undefined
  },
  mutations: {
    setLoggedIn (state) {
      state.isLoggedIn = true
    },
    setLoggedOut (state) {
      state.isLoggedIn = false
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    setUserName (state, userName) {
      state.userName = userName
    }
  },
  actions: {
    LogIn (context, user) {
      context.commit('setLoggedIn')
      context.commit('setUserId', user.id)
      context.commit('setUserName', user.name)
    },
    LogOut (context) {
      context.commit('setLoggedOut')
      context.commit('setUserId', undefined)
      context.commit('setUserName', undefined)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
