<template>
  <ul class="nav-menu" :class="classObject">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
    <li><nuxt-link to="/contact">Contact Me</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return { light: this.light }
    }
  }
}
</script>

<style lang="scss">
.nav-menu {
  background: #33323d;
  color: #ffffff;
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    color: #33323d;
    background: none;
    padding: 0;
  }

  &.light {
    color: #ffffff;
  }

  li {
    line-height: 40px;

    @media screen and (min-width: 768px) {
      display: inline-block;
      padding: 0 22px;
      line-height: 1;
    }
  }
  
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;

    &:hover,
    &.nuxt-link-exact-active {
      color: #5FB4A2;
    }
  }
}
footer .nav-menu a.nuxt-link-exact-active {
      color: inherit;
}
footer .nav-menu a:hover {
      color: #5FB4A2;
}
@media screen and (min-width: 768px) {
  footer .nav-menu {
    flex: 1;
    justify-content: flex-start;
    text-align: left;
    margin: 0 26px;
  }
}
</style>