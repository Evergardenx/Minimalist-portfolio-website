<template>
  <div class="project-nav">

      <nuxt-link :to="`/portfolio/${prev.slug}`" class="prev">
        <div class="image">
          <img src="~/assets/images/icons/arrow-left.svg" alt="previous">
        </div>
        <div class="text">
          <h3>{{ prev.name }}</h3>
          <p class="text-body">Previous Project</p>
        </div>
      </nuxt-link>

      <nuxt-link :to="`/portfolio/${next.slug}`" class="next">
        <div class="image">
          <img src="~/assets/images/icons/arrow-right.svg" alt="next">
        </div>
        <div class="text">
          <h3>{{ next.name }}</h3>
          <p class="text-body">Next Project</p>
        </div>
      </nuxt-link>

    </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      required: true
    },
    next: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>


.project-nav {
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    .prev,
    .next {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .prev {
      .text {
        margin-left: 32px;
      }
    }
    .next {
      flex-direction: row-reverse;

      .text {
        margin-right: 32px;
      }
    }
  }

  img {
    width: 8px;
  }

  h3 {
    margin-bottom: 0;
  }
  .text-body {
    opacity: .5;
    line-height: 1;
    font-weight: 700;
  }

  > * {
    flex: 1;
    border-top: solid 1px rgba(51, 50, 61, 15%);
    border-bottom: solid 1px rgba(51, 50, 61, 15%);
    padding: 10px 0;

    &:first-child {
      border-right: solid 1px rgba(51, 50, 61, 15%);
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
}
</style>