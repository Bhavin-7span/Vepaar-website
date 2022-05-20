<template>
  <section class="module module--row">
    <div class="container">
      <div
        class="flex flex-col-reverse items-center text-left"
        :class="isReverse ? 'sm:flex-row-reverse' : 'sm:flex-row'"
      >
        <div class="lg:max-w-md">
          <h2
            class="
              text-2xl
              lg:text-5xl
              font-semibold
              text-gray-900 text-transparent
              bg-clip-text bg-gradient-to-r
              from-primary-500
              via-purple-500 via-deep-purple-500
              to-pink-500
            "
          >
            <span class="">{{ title }}</span>
          </h2>
          <ul
            class="mt-5 sm:mt-10 list-disc ml-5 text-2xl text-gray-900 relative"
          >
            <li
              v-for="(point, index) in points"
              :key="index"
              :class="key == 0 ? '' : 'mt-5'"
            >
              <h3 class="text-xl font-semibold">{{ point.title }}</h3>
              <p class="text-base mt-2 text-gray-400">
                {{ point.description }}
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-1 crm-feature-image">
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
    points: Array,
    isReverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.module.module--row {
  @apply py-10 sm:py-5;
}
.module--row-customer .crm-feature-image {
  @apply lg:-mr-[6%];
}
.module--row-records .crm-feature-image {
  @apply lg:-ml-[8%];
}
.module--row-saving .crm-feature-image {
  @apply lg:-mr-[2.5%];
}
.module--row-auto .crm-feature-image {
  @apply lg:-ml-[2.5%];
}
.module--row-products .crm-feature-image {
  @apply lg:-mr-[8%];
}
.module--row-variable .crm-feature-image {
  @apply lg:-ml-[6.5%];
}
</style>