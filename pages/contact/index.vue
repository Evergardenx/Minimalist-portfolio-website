<template>
  <div class="contact-page">

    <section class="head">

      <h2>Get in Touch</h2>

      <div>
        <p class="text-body">I’d love to hear about what you’re working on and how I could help. I’m currently 
        looking for a new role and am open to a wide range of opportunities. My preference 
        would be to find a position in a company in London. But I’m also happy to hear about 
        opportunites that don’t fit that description. I’m a hard-working and positive person 
        who will always approach each task with a sense of purpose and attention to detail. 
        Please do feel free to check out my online profiles below and get in touch using the form.</p>

        <SocialLinks />
      </div>

    </section>

    <section class="form">

      <h2>Contact Me</h2>

      <ContactForm />

    </section>

  </div>
</template>

<script>
import SocialLinks from '~/components/SocialLinks'
import ContactForm from '~/components/Form/ContactForm'

export default {
  head: {
    title: 'Contact Me'
  },
  components: {
    SocialLinks,
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  display: grid;
  grid-auto-columns: 1fr;
  gap: 32px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
  }

  @media screen and (min-width: 1110px) {
    margin-bottom: 110px;

    .head,
    .form {
      display: grid;
      grid-template-columns: 1fr 635px;
    }
  }

  .head {
    border-top: solid 1px rgba(51, 50, 61, 15%);
    border-bottom: solid 1px rgba(51, 50, 61, 15%);
    padding: 24px 0;

    @media screen and (min-width: 1110px) {
      .text-body {
        margin-bottom: 35px;
      }
    }
  }
}
</style>