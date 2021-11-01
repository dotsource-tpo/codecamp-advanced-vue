<template>
  <div class="modal fade" :class="_class" id="signInFormModal" tabindex="-1" aria-labelledby="signInFormModal" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="signInFormModal">Sign In</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-4">
          <form @submit.prevent="onSubmitSignIn">
            <div class="form-group mb-2">
              <input type="text" id="signInFormUsername" class="form-control" placeholder="Username" v-model="inputUserName">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" v-model="inputPassword">
            </div>
            <input type="submit" hidden />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="onSubmitSignIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/service/userService.js'

export default {
  name: 'SignInForm',
  data () {
    return {
      inputUserName: '',
      inputPassword: ''
    }
  },
  methods: {
    onSubmitSignIn () {
      if (UserService.LogIn(this.inputUserName, this.inputPassword)) {
        window.bootstrap.Modal.getOrCreateInstance(document.getElementById('signInFormModal')).hide()
      }
    },
    onModalHidden () {
      this.inputUserName = ''
      this.inputPassword = ''
    },
    onModalShown () {
      document.getElementById('signInFormUsername').focus()
    }
  },
  props: [
    '_class'
  ],
  mounted () {
    this.$refs.modal.addEventListener('hidden.bs.modal', () => {
      this.onModalHidden()
    })
    this.$refs.modal.addEventListener('shown.bs.modal', () => {
      this.onModalShown()
    })
  }
}
</script>

<style>

</style>
