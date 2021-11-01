<template>
  <div id="app" class="container">
    <page-header/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
import PageFooter from './components/Footer.vue'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>

</style>
