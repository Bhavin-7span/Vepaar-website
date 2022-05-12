<template>
  <div class="rounded-lg bg-gray-800 p-5" :class="index == 0 ? '' : 'mt-8'">
    <div class="flex">
      <div class="overflow-hidden w-10 lg:w-14 h-10 lg:h-14">
        <img
          :src="'/images/' + testimonial.image"
          class="w-full h-full object-contain rounded-full overflow-hidden"
          alt=""
        />
      </div>
      <div class="px-4 flex-1">
        <h3 class="text-lg lg:text-xl text-white">{{ testimonial.name }}</h3>
        <p class="text-base text-gray-600">{{ testimonial.store }}</p>
      </div>
      <a href="javascript:;" class="ml-auto">
        <img :src="'/images/' + testimonial.socialIcon + '.svg'" alt="" />
      </a>
    </div>

    <p class="mt-5 text-base text-white">{{ testimonial.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    testimonial: Object
  }
};
</script>