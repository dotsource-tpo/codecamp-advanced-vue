<template>
  <header class="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mt-4">
    <router-link to="/" class="h2 d-flex col-auto headline">CodeCamp Advanced</router-link>
    <div v-if="!isLoggedIn" class="mb-2 col-auto text-end">
      <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#signInFormModal">
        Sign in
      </button>
      <button type="button" class="btn btn-primary mx-1">
        Sign up
      </button>
    </div>
    <div v-else class="mb-2 col-auto text-end">
      <span class="align-middle me-2">Welcome, {{ userName }}!</span>
      <button class="btn btn-secondary mx-1" @click="onClickLogOut">Sign out</button>
    </div>
    <navigation _class="col-12 border-top border-bottom mt-2 mb-4"/>

    <sign-in-modal _class="hidden"/>
  </header>
</template>

<script>
import UserService from '@/service/userService.js'
import Navigation from './Navigation.vue'
import SignInModal from './SignInModal.vue'

export default {
  name: 'Header',
  computed: {
    userName () {
      return this.$store.state.userName
    },
    isLoggedIn () {
      return this.$store.state.isSignedIn
    }
  },
  methods: {
    onClickLogOut () {
      UserService.LogOut()
    }
  },
  components: {
    Navigation,
    SignInModal
  }
}
</script>

<style>
.headline {
  text-decoration: none;
  color: var(--bs-body-color);
}
</style>
