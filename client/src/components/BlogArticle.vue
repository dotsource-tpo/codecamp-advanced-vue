<template>
  <article>
    <h3 class="mb-0">{{ title }}</h3>
    <small class="text-muted">{{ date }} by {{ author }}</small>
    <p class="mt-3">{{ content }}</p>
  </article>
</template>

<script>
export default {
  name: 'BlogArticle',
  data () {
    return {}
  },
  props: [
    'title',
    'date',
    'author',
    'content'
  ]
}
</script>

<style>

</style>
