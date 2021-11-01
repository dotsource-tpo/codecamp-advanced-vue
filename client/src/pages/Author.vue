<template>
  <main>
    <form class="mb-3">
      <div class="form-group mb-2">
        <input type="text"  class="form-control" placeholder="Title" v-model="inputTitle">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Content" v-model="inputContent" rows="6"></textarea>
      </div>
    </form>
    <button type="button" class="btn btn-primary float-end">Post</button>
  </main>
</template>

<script>
export default {
  name: 'Author',
  data () {
    return {
      inputTitle: '',
      inputContent: ''
    }
  },
  computed: {
    userName () {
      return this.$store.state.userName
    }
  },
  methods: {
    onSubmit () {
      // TODO
    }
  }
}
</script>

<style>

</style>
