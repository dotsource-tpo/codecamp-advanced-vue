<template>
  <div>
    <h1>{{ headline }}</h1>
    <div v-if="showText">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra orci sagittis eu volutpat. Iaculis urna id volutpat lacus. Dolor morbi non arcu risus quis varius quam quisque id. Mi quis hendrerit dolor magna eget est lorem ipsum. In iaculis nunc sed augue lacus viverra vitae. Purus faucibus ornare suspendisse sed nisi lacus. Dui nunc mattis enim ut tellus. Commodo viverra maecenas accumsan lacus. Urna condimentum mattis pellentesque id nibh tortor id. Dui vivamus arcu felis bibendum. Habitant morbi tristique senectus et. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Arcu risus quis varius quam quisque. Turpis massa tincidunt dui ut.</p>
      <p>Lobortis mattis aliquam faucibus purus in massa. Magna etiam tempor orci eu lobortis elementum. Morbi tristique senectus et netus et malesuada fames ac turpis. Consequat id porta nibh venenatis. Ultrices sagittis orci a scelerisque purus semper eget. Cursus turpis massa tincidunt dui ut ornare lectus. Felis eget velit aliquet sagittis. Felis donec et odio pellentesque. Non tellus orci ac auctor augue mauris. Lobortis scelerisque fermentum dui faucibus in ornare quam. Turpis cursus in hac habitasse platea.</p>
    </div>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        <contact-link :name="contact.name" :email="contact.email">
          <button>Test</button>
        </contact-link>
      </li>
    </ul>
    <router-link to="/">HelloWorld</router-link>
  </div>
</template>

<script>
import ContactLink from './ContactLink.vue'

export default {
  name: 'Impressum',
  data () {
    return {
      headline: 'Impressum',
      showText: true,
      contacts: [
        {
          name: 'Max Mustermann',
          email: 'max@mustermann.de',
          job: 'Entwickler'
        }
      ]
    }
  },
  components: {
    ContactLink
  }
}
</script>

<style>

</style>
