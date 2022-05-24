<template>
  <section class="module module--row bg-gray-100">
    <div class="container">
      <div
        class="
          flex flex-col-reverse
          sm:flex-row
          items-center
          text-left
          justify-between
        "
        :class="isReverse ? 'sm:flex-row-reverse text-left sm:text-right' : ''"
      >
        <div class="max-w-xs lg:max-w-md">
          <h2
            class="text-2xl lg:text-5xl font-semibold text-gray-900"
            :class="isReverse ? 'max-w-sm ml-auto' : ''"
          >
            <span
              class="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-primary-500
                via-purple-500 via-deep-purple-500
                to-pink-500
              "
              >{{ title }}</span
            >
            {{ subTitle }}
          </h2>
          <p class="text-gray-400 my-5 lg:my-8">{{ content }}</p>
          <the-button :href="link">Get Started Now</the-button>
        </div>
        <div class="flex-1" :class="isReverse ? '-ml-[10%]' : '-mr-[8.5%]'">
          <img :src="'/images/' + image" alt="WhatsApp" class="block w-full" />
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
    content: String,
    image: String,
    isReverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      link: "https://web.vepaar.com/#/signup"
    };
  }
};
</script>
<style lang="scss">
.module.module--row {
  @apply py-10 sm:py-0 overflow-hidden;
}
</style>