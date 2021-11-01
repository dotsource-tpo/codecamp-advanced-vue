<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white" :class="_class">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-between" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <router-link to="/" v-slot="{ href, navigate, isExactActive }" custom>
          <li class="nav-item">
            <a :class="[isExactActive && 'active', 'nav-link']" :href="href" @click="navigate">Home</a>
          </li>
        </router-link>
        <router-link to="/impressum" v-slot="{ href, navigate, isExactActive }" custom>
          <li class="nav-item">
            <a :class="[isExactActive && 'active', 'nav-link']" :href="href" @click="navigate">Impressum</a>
          </li>
        </router-link>
      </ul>
      <ul v-if="isSignedIn" class="navbar-nav mb-2 mb-lg-0">
        <router-link to="/author" v-slot="{ href, navigate, isExactActive }" custom>
          <li class="nav-item">
            <a :class="[isExactActive && 'active', 'nav-link']" :href="href" @click="navigate">Author</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {}
  },
  computed: {
    isSignedIn () {
      return this.$store.state.isSignedIn
    }
  },
  props: [
    '_class'
  ]
}
</script>

<style>

</style>
