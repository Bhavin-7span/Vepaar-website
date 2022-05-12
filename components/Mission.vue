<template>
  <section class="module module--mission">
    <div class="container">
      <div class="sm:flex items-center">
        <div class="flex-1">
          <img src="/images/about.jpg" alt="" />
        </div>
        <div class="flex-1 pt-10 sm:pl-20 sm:pt-0">
          <div
            v-for="(mission, index) in missions"
            :key="index"
            :class="index == 0 ? '' : 'mt-10'"
          >
            <h3 class="text-4xl text-gray-500 font-semibold">
              {{ mission.title }}
            </h3>
            <p
              class="
                text-2xl
                font-semibold
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-primary-500
                via-purple-500 via-deep-purple-500
                to-pink-500
                mt-2
              "
            >
              {{ mission.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      missions: [
        {
          title: "Mission",
          text:
            "No code E-commerce builder towards how Vepaar is different and better."
        },
        {
          title: "Our Commitment",
          text:
            "Dedicated to improving Product Quality and provide the best support for our product."
        }
      ]
    };
  }
};
</script>