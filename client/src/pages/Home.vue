<template>
  <main>
    <blog-article v-for="item in items" :key="item.id" :title="item.title" :date="item.date" :author="item.author" :content="item.content"/>
  </main>
</template>

<script>
import api from '@/service/api'
import BlogArticle from '../components/BlogArticle.vue'

export default {
  components: { BlogArticle },
  name: 'Home',
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    let response = await api.get('/articles')
    this.items = response.data
  }
}
</script>

<style>
article:not(:last-child) {
  border-bottom: 1px solid var(--bs-gray-300);
  margin-bottom: 1rem;
}
</style>
