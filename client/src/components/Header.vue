<template>
  <header class="row mt-3">
    <span class="h2 col-10">CodeCamp Advanced</span>
    <div class="col-2 mb-2">
      <span>{{ userName }}</span>
      <router-link v-if="!isLoggedIn" class="btn btn-secondary float-end" to="/login">Login</router-link>
      <button v-else class="btn btn-secondary float-end">Logout</button>
    </div>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'LoginForm',
  computed: {
    userName () {
      return this.$store.state.userName
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>

</style>
