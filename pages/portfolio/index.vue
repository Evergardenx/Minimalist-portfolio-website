<template>

  <div class="projects-page">

    <article class="project" v-for="(project, index) in projects" :key="index">

      <div class="image">
        <picture>
          <source :srcset="require(`~/assets/images/portfolio/desktop/image-portfolio-${project.slug}.jpg`)" media="(min-width: 1110px)">
          <source :srcset="require(`~/assets/images/portfolio/tablet/image-portfolio-${project.slug}.jpg`)" media="(min-width: 768px)">
          <img :src="require(`~/assets/images/portfolio/mobile/image-portfolio-${project.slug}.jpg`)" :alt="project.name + ' project illustration'" />
        </picture>
      </div>

      <div class="content">

        <h2>{{ project.name }}</h2>

        <p class="text-body">{{ project.excerpt }}</p>

        <ButtonLink :to="`/portfolio/${project.slug}`" secondary>View Project</ButtonLink>

      </div>

    </article>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import ButtonLink from '~/components/ButtonLink'

export default {
  head: {
    title: 'My Projects'
  },
  components: {
    ButtonLink
  },
  computed: {
    ...mapGetters({
      projects: 'project/getProjects'
    })
  }
}
</script>

<style lang="scss" scoped>
.projects-page {
  display: grid;
  gap: 72px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }

  .project {
    display: grid;
    gap: 32px;
    grid-auto-columns: 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 70px;

      &:nth-child(2n) {
        .content {
          grid-row-start: 1;
          grid-column-start: 1;
        }
        .image {
          grid-row-start: 1;
          grid-column-start: 2;
        }
      }
    }

    @media screen and (min-width: 1110px) {
      gap: 125px;

      .content {
        margin-right: 95px;
        margin-left: 0;
      }

      &:nth-child(2n) {
        .content {
          margin-left: 95px;
          margin-right: 0;
        }
      }
    }

    .content {
      padding: 24px 0;
      border-top: solid 1px rgba(51, 50, 61, 15%);
      border-bottom: solid 1px rgba(51, 50, 61, 15%);
    }

    .text-body {
      margin-bottom: 32px;
    }
  }
}
</style>