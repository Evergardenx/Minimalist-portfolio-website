<template>
  <form class="contact-form" @submit.prevent="submit" novalidate>

    <InputField 
    type="text" 
    v-model="message.name" 
    label="Name" 
    placeholder="Jane Appleseed" 
    :error="errors.name" />
    
    <InputField 
    type="email" 
    v-model="message.email" 
    label="Email Address" 
    placeholder="email@example.com"
    :error="errors.email" />

    <InputField 
    type="textarea" 
    v-model="message.content" 
    label="Message" 
    placeholder="How can I help?"
    :error="errors.content" />

    <Button label="Send Message" />

  </form>
</template>

<script>
import Button from '~/components/Form/Button'
import InputField from '~/components/Form/InputField'

export default {
  components: {
    Button,
    InputField
  },
  data() {
    return {
      message: {
        name: '',
        email: '',
        content: ''
      },
      errors: {}
    }
  },
  methods: {
    validate() {
      this.errors = {}
      let isValid = true
      if (!this.message.name) {
        console.log('test')
        this.errors.name = 'This field is required'
        isValid = false
      }
      if (!this.message.email) {
        this.errors.email = 'This field is required'
        isValid = false
      }
      else {
        const regexp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        if (!regexp.test(this.message.email)) {
          isValid = false
          this.errors.email = 'This field is not a valid email'
        }
      }
      if (!this.message.content) {
        this.errors.content = 'This field is required'
        isValid = false
      }
      return isValid
    },
    submit() {
      if (!this.validate()) {
        return;
      }
      console.log('Send Message :', this.message)
    }
  }
}
</script>