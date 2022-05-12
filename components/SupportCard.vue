<template>
  <div class="bg-gray-100 p-5 rounded flex items-center">
    <img
      :src="'/images/' + support.icon"
      alt=""
      class="w-12 h-12 sm:w-14 sm:h-14 mr-5"
    />
    <h3
      class="text-xl sm:text-2xl text-gray-900 font-semibold support-title"
      v-html="support.title"
    ></h3>
  </div>
</template>
<script>
export default {
  props: {
    support: Object
  }
};
</script>
<style lang="scss">
.support-title {
  span {
    @apply block;
  }
}
</style>