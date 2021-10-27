<template>
  <div>
    <span>{{ name }}</span>
    |
    <a :href="'mailto:' + email">{{ email }}</a>
    |
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContactLink',
  data () {
    return {}
  },
  props: [
    'name',
    'email'
  ]
}
</script>

<style>

</style>
