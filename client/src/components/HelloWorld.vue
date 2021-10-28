<template>
  <div>
    <h1>Hello{{ username ? " " + username : "!" }}</h1>
    <router-link to="/impressum">Impressum</router-link>
    <router-link to="/interactive">Interactive</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
