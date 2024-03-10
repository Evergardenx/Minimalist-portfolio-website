<template>
  <nav class="nav" :class="{'active': menuActive}">
    <div class="nav-toggle">
      <img class="icon-open" src="~/assets/images/icons/hamburger.svg" alt="open menu" @click="toggleMenu">
      <img class="icon-close" src="~/assets/images/icons/close.svg" alt="close menu" @click="toggleMenu">
    </div>
    
    <NavMenu />

  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavMenu from '~/components/Navigation/NavMenu'

export default {
  components: {
    NavMenu
  },
  computed: {
    ...mapState({
      menuActive: state => state.nav.menuActive
    })
  },
  methods: {
    toggleMenu() {
      this.$store.commit('nav/toggle')
    }
  }
}
</script>

<style lang="scss">
nav {
  position: relative;

  .nav-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 56px;
    width: 220px;
    z-index: 10;

    @media screen and (min-width: 768px) {
      display: block;
      position: static;
      width: auto;
    }
  }

  @media screen and (min-width: 768px) {
    .nav-toggle {
      display: none;
    }
  }

  &.active .nav-menu {
    display: block;
  }

  &.active .icon-open {
    display: none;
  }
  .icon-close {
    display: none;
  }
  &.active .icon-close {
    display: block;
  }
}
</style>