<template>
  <div class="plan" :class="plan.title + '-plan'">
    <h2 class="font-semibold text-gray-500 text-4xl capitalize">
      {{ plan.title }}
    </h2>
    <p class="text-gray-500 my-4 text-lg px-5">{{ plan.text }}</p>
    <h3 class="text-4xl text-gray-500 font-semibold">{{ plan.price }}</h3>
    <div class="h-20">
      <a :href="plan.link" class="plan-button">Try Now!</a>
      <p class="plan-note">{{ plan.notes }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    plan: Object
  }
};
</script>
<style lang="scss">
.plan-button {
  @apply inline-flex px-8 h-10 text-sm rounded items-center text-white w-full justify-center;
}
.free-plan {
  @apply hover:border-primary-500;
  .plan-button {
    @apply bg-primary-500 hover:bg-primary-600;
  }
}
.basic-plan {
  @apply hover:border-purple-500;
  .plan-button {
    @apply bg-purple-500 hover:bg-purple-600;
  }
}
.pro-plan {
  @apply hover:border-deep-purple-500;
  .plan-button {
    @apply bg-deep-purple-500 hover:bg-deep-purple-600;
  }
}
.agency-plan {
  @apply hover:border-pink-500;
  .plan-button {
    @apply bg-pink-500 hover:bg-pink-600;
  }
}
.plan {
  @apply flex-1 bg-gray-100 rounded m-4 p-5 text-center transition-all duration-300 border-4 border-transparent;
  &:hover {
    .plan-button {
      @apply h-14 text-opacity-100 mt-5;
    }
    .plan-note {
      font-size: 0px;
      @apply opacity-0;
    }
  }
  .plan-button {
    font-size: 0px;
    @apply inline-flex px-8 rounded h-0 items-center text-lg transition-all duration-300 text-white text-opacity-0 w-auto;
  }
  &-note {
    @apply text-gray-400 text-sm;
  }
}
</style>