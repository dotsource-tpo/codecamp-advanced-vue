<template>
  <div>
    <input type="number" v-model="counter">
    <button @click="increaseCounter">+1</button>
    <button @click="resetCounter">Reset</button>
    <br>
    <input type="checkbox" v-model="buttonsActive">
    <br>
    <select name="select" id="select" v-model="selectedOption">
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
    </select>
    <p>{{ selectedOption }}</p>
    <br>
    <input type="text" v-model="loginUsername" placeholder="Username">
    <button @click="onClickLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Interactive',
  data () {
    return {
      counter: 0,
      buttonsActive: true,
      selectedOption: '',
      loginUsername: ''
    }
  },
  methods: {
    increaseCounter () {
      if (this.buttonsActive) {
        this.counter++
      }
    },
    resetCounter () {
      if (this.buttonsActive) {
        this.counter = 0
      }
    },
    onClickLogin () {
      this.$store.dispatch('setUserName', this.loginUsername)
    }
  }
}
</script>

<style>

</style>
