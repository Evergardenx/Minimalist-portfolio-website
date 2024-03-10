<template>

  <div class="project-page">

    <div class="hero">
      <picture>
        <source :srcset="require(`~/assets/images/detail/desktop/image-${project.slug}-hero.jpg`)" media="(min-width: 1110px)">
        <source :srcset="require(`~/assets/images/detail/tablet/image-${project.slug}-hero.jpg`)" media="(min-width: 768px)">
        <img :src="require(`~/assets/images/detail/mobile/image-${project.slug}-hero.jpg`)" :alt="project.name + ' project illustration'" />
      </picture>
    </div>

    <div class="detail">
    
      <div class="head">

        <h2>{{ project.name }}</h2>

        <p class="excerpt text-body">{{ project.excerpt }}</p>

        <div class="metas">
          <p class="text-info">{{ project.roles.join(' / ') }}</p>
          <p class="text-info">{{ project.languages.join(' / ') }}</p>
        </div>

        <ButtonLink class="link" :href="project.websiteUrl" secondary>Visit Website</ButtonLink>
      
      </div>

      <div class="body">

        <div class="back">

          <h3>Project Background</h3>

          <p class="text-body">{{ project.description }}</p>

        </div>
        
        <div class="previews">

          <h3>Static Previews</h3>

          <picture>
            <source :srcset="require(`~/assets/images/detail/desktop/image-${project.slug}-preview-1.jpg`)" media="(min-width: 1110px)">
            <source :srcset="require(`~/assets/images/detail/tablet/image-${project.slug}-preview-1.jpg`)" media="(min-width: 768px)">
            <img :src="require(`~/assets/images/detail/mobile/image-${project.slug}-preview-1.jpg`)" :alt="project.name + ' preview image 1'" />
          </picture>

          <picture>
            <source :srcset="require(`~/assets/images/detail/desktop/image-${project.slug}-preview-2.jpg`)" media="(min-width: 1110px)">
            <source :srcset="require(`~/assets/images/detail/tablet/image-${project.slug}-preview-2.jpg`)" media="(min-width: 768px)">
            <img :src="require(`~/assets/images/detail/mobile/image-${project.slug}-preview-2.jpg`)" :alt="project.name + ' preview image 2'" />
          </picture>

        </div>
        
      </div>

    </div>

    <ProjectNav :prev="prevProj" :next="nextProj" />

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import ButtonLink from '~/components/ButtonLink'
import ProjectNav from '~/components/Project/ProjectNav'

export default {
  head: {
    title: 'Manage Project'
  },
  components: {
    ButtonLink,
    ProjectNav
  },
  computed: {
    ...mapGetters({
      getProject: 'project/getProject',
      getProjectPrev: 'project/getProjectPrev',
      getProjectNext: 'project/getProjectNext'
    }),
    project() {
      return this.getProject(this.$route.params.slug)
    },
    prevProj() {
      return this.getProjectPrev(this.$route.params.slug)
    },
    nextProj() {
      return this.getProjectNext(this.$route.params.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-page {
  .hero {
    margin-bottom: 40px;
  }
  .detail {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    margin-bottom: 65px;

    @media screen and (min-width: 1110px) {
      grid-template-columns: 350px 1fr;
      grid-template-rows: auto auto;
      gap: 125px;

      h3 {
        margin-top: 0;
      }
    }
  }
  .head {
    border-top: solid 1px rgba(51, 50, 61, 15%);
    border-bottom: solid 1px rgba(51, 50, 61, 15%);
    padding: 24px 0;

    .metas {
      margin: 36px 0;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, auto);

      h2 {
        grid-column-start: 1;
        grid-row-start: 1;
      }
      .excerpt {
        grid-column-start: 2;
        grid-row: 1 / span 4;
      }
      .metas {
        grid-column-start: 1;
        grid-row-start: 2;
        margin: 0 0 20px 0;
      }
      .link {
        grid-column-start: 1;
        grid-row-start: 3;
      }
    }

    @media screen and (min-width: 1110px) {
      display: block;

      .metas {
        margin: 36px 0;
      }
    }
  }

  .body {
    @media screen and (min-width: 1110px) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
    .previews {
      display: grid;
      grid-auto-columns: 1fr;
      gap: 32px;
      margin-top: 20px;

      @media screen and (min-width: 768px) {
        margin-top: 52px;
      }
    }
  }
}
</style>