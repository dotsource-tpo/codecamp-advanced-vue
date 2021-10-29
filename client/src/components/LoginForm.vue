<template>
  <div>
    <form>
      <div class="form-group">
        <label for="inputUserName">Username</label>
        <input name="inputUserName" class="form-control" type="text" placeholder="Username" v-model="inputUserName">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" name="inputPassword" id="inputPassword" class="form-control" placeholder="Password" v-model="inputPassword">
      </div>
      <button type="button" class="btn btn-primary" @click="onClickLogIn">Login</button>
    </form>
  </div>
</template>

<script>
import UserService from '@/service/userService.js'

export default {
  name: 'LoginForm',
  data () {
    return {
      inputUserName: '',
      inputPassword: ''
    }
  },
  methods: {
    onClickLogIn () {
      UserService.LogIn(this.inputUserName, this.inputPassword)
    }
  }
}
</script>

<style>

</style>
