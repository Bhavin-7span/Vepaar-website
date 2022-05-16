<template>
  <div class="flex">
    <div class="w-10">
      <img :src="'/images/' + feature.icon" class="w-full" />
    </div>
    <div class="flex-1 pl-2">
      <h3
        class="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-semibold mt-1"
      >
        {{ feature.title }}
      </h3>
      <p class="text-gray-400 text-sm sm:text-base py-3">
        {{ feature.text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    feature: Object
  }
};
</script>