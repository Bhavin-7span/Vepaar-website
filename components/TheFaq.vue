<template>
  <section class="module module--faq bg-gray-100">
    <div class="container">
      <div class="block sm:flex">
        <div class="flex-1">
          <h2
            class="
              text-3xl
              lg:text-6xl
              font-semibold
              text-transparent
              bg-clip-text bg-gradient-to-r
              from-primary-500
              via-purple-500 via-deep-purple-500
              to-pink-500
            "
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div class="flex-1 pt-10 sm:pt-0">
          <TheAccordion
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question"
          >
            <p>{{ faq.answer }}</p>
          </TheAccordion>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    faqs: Array
  },
  methods: {
    toggleAccordion() {}
  }
};
</script>