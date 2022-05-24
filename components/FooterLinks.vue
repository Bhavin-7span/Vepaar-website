<template>
  <div>
    <h3 class="text-gray-500 text-2xl font-semibold">{{ flink.title }}</h3>

    <div class="mt-5 lg:mt-10">
      <nuxt-link
        v-for="(link, index) in flink.links"
        :key="index"
        :to="link.href"
        class="text-white text-base sm:text-lg block footer-link"
        :class="index == 0 ? '' : 'mt-2 lg:mt-4'"
      >
        {{ link.name }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    flink: Object
  }
};
</script>
<style lang="scss">
.footer-link:hover {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500;
}
</style>