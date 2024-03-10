<template>
  
  <div class="form-group" :class="{ 'form-error': error }">
  
    <label>

      {{ label }}

      <textarea 
        v-if="type === 'textarea'" 
        rows="6" 
        :placeholder="placeholder" 
        :value="value" 
        @input="$emit('input', $event.target.value)">
      </textarea>

      <input 
        v-else 
        v-bind="$attrs" 
        :value="value" 
        :type="type" 
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)">

    </label>

    <p v-if="error" class="error-message">{{ error }}</p>

  </div>

</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  font-size: 13px;
  font-weight: 700;
  font-family: 'Public Sans', sans-serif;
  padding: 13px 0;

  input,
  textarea {
    color: inherit;
    display: block;
    width: 100%;
    padding: 10px 16px 20px;
    background: rgba(51, 50, 61, 10%);
    border: solid 1px transparent;
    font-size: 13px;
    font-weight: 700;
    outline: none;
    margin-top: 20px;
    font-family: 'Public Sans', sans-serif;

    &:focus {
      border: solid 1px #5FB4A2;
    }
    &::placeholder {
      font-family: 'Public Sans', sans-serif;
      opacity: .4;
    }
  }

  &.form-error {
    input,
    textarea {
      border: solid 1px #f43030;
    }
  }

  .error-message {
    color: #f43030;
    font-weight: bold;
    font-style: italic;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>