<template>
  <section
    class="module module--counter"
    style="background-image: url('/images/counter-background.jpg')"
  >
    <div class="container">
      <div class="block sm:flex justify-between">
        <div
          v-for="(counter, index) in counters"
          :key="index"
          class="text-center"
          :class="index == 0 ? '' : 'mt-8 sm:mt-0'"
        >
          <h3 class="text-4xl lg:text-5xl text-white font-semibold">
            {{ counter.value }}
          </h3>
          <p class="text-gray-400 text-base mt-2">{{ counter.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      counters: [
        {
          title: "Total User",
          value: "1.5lac+"
        },
        {
          title: "Mobile App User",
          value: "1lac+"
        },
        {
          title: "Chrome Extension User",
          value: "5k+"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.module--counter {
  background-size: cover;
  background-position: center;
}
</style>