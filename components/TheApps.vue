<template>
  <section class="module--apps bg-gray-900 mt-10 pt-10 sm:py-0">
    <div class="container">
      <div class="sm:flex items-center">
        <div class="max-w-sm">
          <slot></slot>
        </div>
        <div class="flex-1 mt-10 sm:mt-0">
          <img :src="`images/`+image" alt="" class="-ml-5 sm:ml-0">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:{
    image:String
  }
}
</script>