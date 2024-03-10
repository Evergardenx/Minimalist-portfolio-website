<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.svg" alt="logo">
        </nuxt-link>
      </div>
      
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from '~/components/Navigation/Nav'

export default {
  components: {
    Nav
  }
}
</script>