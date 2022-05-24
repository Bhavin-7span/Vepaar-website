<template>
  <section
    class="module module--hero"
    :class="isHeightAuto ? 'module--hero-auto' : ''"
  >
    <div class="container h-full flex items-center">
      <div class="max-w-lg" :class="isCenter ? 'mx-auto text-center' : ''">
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
          class="mt-8 text-gray-400 text-sm sm:text-base lg:text-lg"
        >
          {{ textContent }}
        </p>
        <the-button
          v-if="link !== ''"
          color="primary"
          :title="buttonLabel"
          :href="link"
          class="mt-10"
        />
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
    link: {
      default: "",
      type: String
    },
    isHeightAuto: {
      default: false,
      type: Boolean
    },
    isCenter: {
      default: false,
      type: Boolean
    },
    buttonLabel: {
      default: "Get Started Now",
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