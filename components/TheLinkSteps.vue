<template>
  <section class="module module--links">
    <div class="container">
      <div class="sm:flex">
        <div class="flex-1 sm:pr-10">
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
            It's Easy! Just <span class="block">3 Simple Steps</span>
          </h2>
          <p class="text-gray-400 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus
            ultrices amet posuere placerat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem purus ultrices amet posuere
            placerat.
          </p>
        </div>
        <div class="flex-1 sm:pl-10 pt-10 sm:pt-0">
          <div class="link-list">
            <div v-for="(step, index) in steps" :key="index" class="link-card">
              <img
                :src="'images/' + step.icon"
                alt=""
                class="link-card__icon"
              />
              <h3 class="link-card__title">{{ step.title }}</h3>
              <p class="link-card__text">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          icon: "whatsapp-accent.svg",
          title: "Open WhatsApp Link Generator",
          description: "Enter your phone number with correct country code."
        },
        {
          icon: "default-message.svg",
          title: "Set Default Message",
          description:
            "Enter the default message that you would like your customers to see."
        },
        {
          icon: "whatsapp-link.svg",
          title: "Get Your WhatsApp Link",
          description:
            "Click on ‘Get Link’ button to generate your customised WhatsApp Link. "
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.link-list {
  @apply relative pb-10 sm:pb-28;
  &::after {
    content: "";
    @apply absolute left-0 top-0 bottom-0 w-[3px] h-full bg-gray-200;
  }
}
.link-card {
  @apply text-left pl-10 sm:pl-20 relative;
  &__title {
    @apply text-xl sm:text-2xl font-semibold text-gray-500 my-2 max-w-xs;
  }
  &__text {
    @apply text-gray-500 max-w-xs;
  }
  &::before {
    content: "";
    @apply absolute top-8 w-5 sm:w-8 h-[3px] bg-gray-200 left-0;
  }
  & + .link-card {
    @apply mt-10;
  }
}
</style>