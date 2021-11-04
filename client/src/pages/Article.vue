<template>
  <main>
    <blog-article :article="article"/>
  </main>
</template>

<script>
import api from '@/service/api'
import BlogArticle from '../components/BlogArticle.vue'

export default {
  components: { BlogArticle },
  name: 'Article',
  data () {
    return {
      article: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    api.get('/articles/find', {
      params: {
        id: to.params.id
      }
    }).then((response) => {
      next(vm => (vm.article = response.data))
    })
  }
}
</script>

<style>

</style>
