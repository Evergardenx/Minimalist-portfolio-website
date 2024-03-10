<template>
  <button :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    label: {
      type: String,
      default: 'Submit'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  font-family: 'Public Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #203A4C;
  padding: 15px 30px;
  color: #FFFFFF;
  cursor: pointer;
  margin: 13px 0;
  white-space: nowrap;
  border: 0;

  &:hover {
    opacity: .9;
  }
}
</style>