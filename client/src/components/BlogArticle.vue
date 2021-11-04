<template>
  <article>
    <router-link class="h3 mb-0 article-headline" :to="`/article/${article._id}`">{{ article.title }}</router-link>
    <small class="text-muted">{{ article.date }} by {{ article.author }}</small>
    <p class="mt-3" :class="{ preview: isPreview }">{{ article.content }}</p>
  </article>
</template>

<script>
export default {
  name: 'BlogArticle',
  data () {
    return {}
  },
  props: [
    'article',
    'isPreview'
  ]
}
</script>

<style>
.article-headline {
  text-decoration: none;
  display: block;
}

.preview {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
