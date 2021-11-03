<template>
  <main>
    <form class="mb-3">
      <div class="form-group mb-2">
        <input type="text"  class="form-control" placeholder="Title" v-model="inputTitle" :disabled="isInputDisabled">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Content" v-model="inputContent" rows="6" :disabled="isInputDisabled"></textarea>
      </div>
    </form>
    <button type="button" class="btn btn-primary float-end" :disabled="isInputDisabled" @click="onSubmit">Post</button>
  </main>
</template>

<script>
import api from '@/service/api'

export default {
  name: 'Author',
  data () {
    return {
      inputTitle: '',
      inputContent: '',
      isInputDisabled: false
    }
  },
  computed: {
    userName () {
      return this.$store.state.userName
    }
  },
  methods: {
    async onSubmit () {
      this.isInputDisabled = true

      await api.post('articles/add', {
        title: this.inputTitle,
        author: this.userName,
        date: new Date().toLocaleDateString('de-DE'),
        content: this.inputContent
      })

      this.isInputDisabled = false
    }
  }
}
</script>

<style>

</style>
