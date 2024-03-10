<template>
  <footer>
    
      <div v-if="$route.path !== '/contact'" class="contact-tag container">
      
        <h2>Interested in doing a project together?</h2>

        <div class="link"></div>

        <ButtonLink to="/contact" secondary>Contact Me</ButtonLink>

      </div>

      <div class="footer">

        <div class="container">

          <div class="logo">
            <img src="~/assets/images/logo-white.svg" alt="logo">
          </div>

          <NavMenu light />

          <SocialLinks light />

        </div>

    

    </div>

  </footer>
</template>

<script>
import ButtonLink from '~/components/ButtonLink'
import SocialLinks from '~/components/SocialLinks'
import NavMenu from '~/components/Navigation/NavMenu'

export default {
  components: {
    ButtonLink,
    SocialLinks,
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
footer {
  
  h2 {
    margin-top: 0;
    margin-bottom: 32px;
  }
  .contact-tag {
    padding: 115px 32px 0;
    text-align: center;
    margin-bottom: 80px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 55% 1fr 1fr;
      gap: 32px;
      align-items: center;
      text-align: left;
    }

    .link {
      display: none;
      height: 1px;
      width: 100%;
      border-bottom: solid 1px #33323D;
      opacity: .15;

      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
  .footer {
    background: #33323D;
    color: #ffffff;
    text-align: center;
    padding: 56px 0;

    @media screen and (min-width: 768px) {
      
      padding: 24px 0;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
    }

  }
}

</style>