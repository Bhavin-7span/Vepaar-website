<template>
  <section
    class="module module--hero"
    :class="isHeightAuto ? 'module--hero-auto' : ''"
  >
    <div class="container h-full flex items-center">
      <div class="max-w-lg">
        <h2
          class="
            text-3xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-primary-500
            via-purple-500 via-deep-purple-500
            to-pink-500
          "
        >
          {{ title }}
        </h2>
        <h3 class="text-2xl sm:text-4xl lg:text-5xl text-white font-semibold">
          {{ subTitle }}
        </h3>
        <p
          v-if="textContent"
          class="mt-8 text-gray-500 text-sm sm:text-base lg:text-lg"
        >
          {{ textContent }}
        </p>
        <div v-if="href !== ''" class="mt-10">
          <the-button color="primary">Get Started Now</the-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    subTitle: String,
    textContent: String,
    href: {
      default: "",
      type: String
    },
    isHeightAuto: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
.module--hero {
  @apply bg-gray-900;
  height: calc(100vh - 80px);
  &-auto {
    @apply h-auto py-32;
  }
}
</style>