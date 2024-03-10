<template>
  <div>

    <nuxt-link v-if="to" :to="to" :class="classObject">
      <slot />
    </nuxt-link>

    <a v-else :href="link" :class="classObject">
      <slot/>
    </a>

  </div>

</template>

<script>
export default { 
  props: {
    to: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: '#'
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return {
        btn: true,
        'btn-primary': this.primary,
        'btn-secondary': this.secondary,
        disabled: this.disabled
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  font-family: 'Public Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}
.btn-primary {
  padding: 15px 30px 15px 72px;
  position: relative;
  background: #203A4C;
  border: none;
  color: #ffffff;

  &:before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left:0;
    bottom: 0;
    width: 42px;
    background: #000000;
    opacity: .1;
  }
  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left:0;
    bottom: 0;
    width: 42px;
    background: url('~assets/images/icons/down-arrows.svg');
    background-position: center;
    background-repeat: no-repeat;
  }

  &:hover {
    background: #5FB4A2;
    color: #ffffff;
  }

  &.disabled {
    pointer-events: none;
    opacity: .2;
  }
}

.btn-secondary {
  padding: 15px 30px;
  background: none;
  border: solid 1px #33323d;
  color: #33323D;

  &:hover {
    background: #33323D;
    color: #FAFAFA;
  }

  &.disabled {
    pointer-events: none;
    opacity: .2;
  }
}
</style>