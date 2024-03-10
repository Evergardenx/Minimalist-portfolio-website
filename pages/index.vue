<template>
  <div class="homepage">

    <section class="hero">
      <picture>
        <source srcset="~/assets/images/homepage/desktop/image-homepage-hero.jpg" media="(min-width: 1110px)">
        <source srcset="~/assets/images/homepage/tablet/image-homepage-hero.jpg" media="(min-width: 768px)">
        <img src="~/assets/images/homepage/mobile/image-homepage-hero.jpg" alt="hero banner" />
      </picture>

      <div class="hero-text">
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>

        <ButtonLink to="#aboutme" primary>About Me</ButtonLink>
      </div>
    </section>

    <section class="about">

      <div class="image">
        <picture>
          <source srcset="~/assets/images/homepage/desktop/image-homepage-profile.jpg" media="(min-width: 1110px)">
          <source srcset="~/assets/images/homepage/tablet/image-homepage-profile.jpg" media="(min-width: 768px)">
          <img src="~/assets/images/homepage/mobile/image-homepage-profile.jpg" alt="profile image" />
        </picture>
      </div>

      <div id="aboutme" class="aboutme">

        <h2>About Me</h2>

        <p class="text-body">I’m a junior front-end developer looking for a new role in an exciting company. 
        I focus on writing accessible HTML, using modern CSS practices and writing clean 
        JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
        whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
        and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
        I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
        you to check out my work.</p>

        <ButtonLink to="/portfolio" secondary>Go to Portfolio</ButtonLink>

      </div>

    </section>

  </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink'

export default {
  head: {
    title: 'Minimalist Portfolio'
  },
  components: {
    ButtonLink
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin: 16px 0 96px; 
  position: relative;

  .hero-text {
    background: #FAFAFA;

    @media screen and (min-width: 768px) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 515px;
      display: block;
      padding: 56px 56px 0 0;
    }

    h1 {
      font-size: 40px;
      @media screen and (min-width: 768px) {
        margin-bottom: 40px;
      }
      @media screen and (min-width: 1110px) {
        font-size: 50px;
      }
    }
  }
}

.about {
  .image {
    display: flex;
    justify-content: center;
    
    img {
      display: block;
      margin-bottom: 32px;

      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 1110px) {
      display: block;
    }
  }
  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 280px 340px;
    gap: 70px;
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: 540px 350px;
    gap: 125px;
  }

  

  .aboutme {
    padding: 32px 0 50px;
    border-top: solid 1px rgba(51, 50, 61, 15%);
    border-bottom: solid 1px rgba(51, 50, 61, 15%);
  }
}

</style>