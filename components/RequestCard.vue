<template>
  <div
    class="
      request-card
      rounded-[32px]
      border-4 border-gray-700
      bg-gray-800
      flex-1
      px-5
      py-8
      text-center
    "
  >
    <h3 class="text-4xl text-white">{{ data.title }}</h3>
    <div class="mt-5">
      <h4 class="text-gray-400 text-xl font-thin mx-20">{{ data.label }}</h4>
      <p class="text-gray-500 my-4 text-sm font-thin leading-5 mx-6">
        {{ data.description }}
      </p>
      <the-button class="mt-4">{{ data.buttonLabel }}</the-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
};
</script>
<style lang="scss">
.request-card {
  & + .request-card {
    @apply mt-5 sm:mt-0 sm:ml-5;
  }
}
</style>