import store from '../main'

export default {
  LogIn (userName, password) {
    let userId

    if (userName === 'admin' && password === 'admin') {
      userId = 1
      store.dispatch('LogIn', { id: userId, name: userName })
      return true
    } else if (userName === 'guest' && password === 'guest') {
      userId = 2
      store.dispatch('LogIn', { id: userId, name: userName })
      return true
    }

    return false
  },
  LogOut () {
    store.dispatch('LogOut')
  }
}
