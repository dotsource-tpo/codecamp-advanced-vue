import app from '../main'

export default {
  LogIn (userName, password) {
    let userId

    if (userName === 'admin' && password === 'admin') {
      userId = 1
      app.$store.dispatch('LogIn', { id: userId, name: userName })
      app.$cookies.set('user', { id: userId, name: userName }, '5min')
      return true
    } else if (userName === 'guest' && password === 'guest') {
      userId = 2
      app.$store.dispatch('LogIn', { id: userId, name: userName })
      app.$cookies.set('user', { id: userId, name: userName }, '5min')
      return true
    }

    return false
  },
  LogOut () {
    app.$store.dispatch('LogOut')
    app.$cookies.remove('user')
  }
}
