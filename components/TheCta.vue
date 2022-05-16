<template>
  <section class="module module--cta">
    <div class="container">
      <div class="lg:flex items-end">
        <div class="flex-1 sm:pr-5">
          <p class="text-lg text-white">{{ tagline }}</p>
          <h2
            class="text-3xl lg:text-5xl text-white font-semibold my-5 max-w-lg"
          >
            {{ title }}
          </h2>
          <p class="text-base font-light sm:font-normal sm:text-lg text-white">
            {{ description }}
          </p>
        </div>
        <div class="w-60 lg:w-80 lg:max-w-xs mt-5">
          <div class="flex items-center lg:justify-end mb-2">
            <label class="block text-white">Available On:</label>
            <div class="flex">
              <a
                :href="link.href"
                v-for="(link, index) in downloadLinks"
                :key="index"
                class="w-8 h-8 flex items-center justify-center"
              >
                <img
                  :src="'/images/' + link.icon"
                  alt=""
                  class="object-contain object-center"
                />
              </a>
            </div>
          </div>
          <the-button color="white" class="w-full justify-center"
            >Sign Up for Free!</the-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    tagline: String,
    title: String,
    description: String
  },
  data() {
    return {
      downloadLinks: [
        {
          icon: "web.svg",
          href: "#"
        },
        {
          icon: "iOS.svg",
          href: "#"
        },
        {
          icon: "android.svg",
          href: "#"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.module--cta {
  background-image: url("/images/cta-business-bg.jpg");
  @apply bg-cover bg-center py-12 sm:py-28;
}
</style>