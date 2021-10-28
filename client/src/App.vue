<template>
  <div id="app" class="container">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    PageHeader
  }
}
</script>

<style>

</style>
