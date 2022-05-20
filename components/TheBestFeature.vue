<template>
  <section class="module module--feature">
    <div class="container">
      <h2 class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
        {{ title }}
        <span
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
            block
          "
          v-html="subTitle"
        ></span>
      </h2>
      <p class="text-gray-400 text-sm sm:text-lg mt-5 max-w-3xl">
        {{ content }}
      </p>

      <div
        v-if="isFeatureRow"
        class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 lg:mt-20"
      >
        <FeatureCardRow
          v-for="(feature, index) in features"
          :key="index"
          :feature="feature"
        />
      </div>
      <div
        v-else
        class="grid gap-14 mt-10 lg:mt-20"
        :class="
          cols2
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-3'
        "
      >
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :feature="feature"
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
    content: String,
    features: Array,
    isFeatureRow: {
      type: Boolean,
      default: false
    },
    cols2: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.module--feature {
  @apply pt-0;
  &.module--feature-bg {
    @apply pt-14 bg-gray-100;
  }
}
</style>