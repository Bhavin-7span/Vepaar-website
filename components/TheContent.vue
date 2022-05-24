<template>
  <section class="module module--content">
    <div class="container">
      <div
        class="
          sm:max-w-md
          lg:max-w-3xl lg:my-12
          mx-auto
          text-left
          lg:text-center
        "
      >
        <h2
          class="
            text-2xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-primary-500
            via-purple-500 via-deep-purple-500
            to-pink-500
            inline-block
          "
        >
          {{ title }}
        </h2>
        <h3
          class="text-2xl sm:text-4xl lg:text-5xl text-gray-900 font-semibold"
        >
          {{ subTitle }}
        </h3>
        <p class="my-5 lg:my-6 text-sm sm:text-base lg:text-lg text-gray-400">
          {{ content }}
        </p>
        <the-button v-if="ctaButton" size="lg" :href="link">
          Get Started Now
        </the-button>
      </div>
    </div>
    <div class="mt-8 -mb-7 lg:-mb-10 max-w-7xl mx-auto">
      <img :src="'/images/' + image" />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    subTitle: String,
    content: String,
    image: String,
    ctaButton: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      link: "https://web.vepaar.com/#/signup"
    };
  }
};
</script>