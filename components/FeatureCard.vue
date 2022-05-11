<template>
  <div>
    <div class="flex items-center">
      <div class="w-8 sm:w-9">
        <img :src="'images/'+feature.icon" class="w-9 h-9 object-contain object-center" />
      </div>
      <div class="flex-1 pl-3">
        <h3 class="text-gray-500 text-xl sm:text-2xl font-semibold mt-1">{{feature.title}}</h3>
      </div>
    </div>
    <p class="text-gray-400 text-lg mt-3">{{feature.text}}</p>
  </div>
</template>
<script>
export default {
  props:{
    feature:Object
  },
}
</script>