// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueCookies)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    isSignedIn: false,
    userId: undefined,
    userName: undefined
  },
  mutations: {
    setSignedIn (state) {
      state.isSignedIn = true
    },
    setSignedOut (state) {
      state.isSignedIn = false
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
      context.commit('setSignedIn')
      context.commit('setUserId', user.id)
      context.commit('setUserName', user.name)
    },
    LogOut (context) {
      context.commit('setSignedOut')
      context.commit('setUserId', undefined)
      context.commit('setUserName', undefined)
    }
  }
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const user = this.$cookies.get('user')

    if (user) {
      this.$store.dispatch('LogIn', user)
    }
  }
})

export default app
