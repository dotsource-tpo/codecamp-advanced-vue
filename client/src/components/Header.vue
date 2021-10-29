<template>
  <header class="row mt-3">
    <router-link to="/" class="h2 col-10 headline">CodeCamp Advanced</router-link>
    <div class="col-2 mb-2">
      <router-link v-if="!isLoggedIn" class="btn btn-secondary float-end" to="/login">Login</router-link>
      <button v-else class="btn btn-secondary float-end" @click="onClickLogOut">Logout</button>
      <span class="float-end">{{ userName }}</span>
    </div>
    <hr>
  </header>
</template>

<script>
import UserService from '@/service/userService.js'

export default {
  name: 'LoginForm',
  computed: {
    userName () {
      return this.$store.state.userName
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    onClickLogOut () {
      UserService.LogOut()
    }
  }
}
</script>

<style>
.headline {
  text-decoration: none;
  color: var(--bs-body-color);
}
</style>
