<template>
  <section class="module module--poll">
    <div class="container">
      <h2
        class="
          text-center text-3xl
          lg:text-5xl
          font-semibold
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-primary-500
          via-purple-500 via-deep-purple-500
          to-pink-500
        "
      >
        How do you create a poll?
      </h2>
      <p class="text-gray-400 text-center text-base mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus
        ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem purus ultrices amet posuere placerat.
      </p>

      <div class="step-list">
        <div v-for="(step, index) in steps" :key="index" class="step-card">
          <img :src="'/images/' + step.icon" alt="" class="step-card__icon" />
          <h3 class="step-card__title">{{ step.title }}</h3>
          <p class="step-card__text">{{ step.description }}</p>
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
          icon: "create.svg",
          title: "Create",
          description:
            "Write a poll question, provide the options, and configure the poll settings."
        },
        {
          icon: "share.svg",
          title: "Share",
          description:
            "Forward the poll to your desired audience, depending on your requirements."
        },
        {
          icon: "collect.svg",
          title: "Collect",
          description:
            "Start receiving real-time votes on WhatsApp which will be reflected live on the poll result page."
        },
        {
          icon: "analyse.svg",
          title: "Analyse",
          description:
            "Analyze the statistics of the data after the poll results are received. Compare the results and get idea of what your customers want."
        },
        {
          icon: "export.svg",
          title: "Export",
          description:
            "Share the results in WhatsApp and also other platforms and let your customers know the results too."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.module.module--poll {
  @apply py-12 sm:py-20 lg:py-32;
}
.step-list {
  @apply mt-20 relative;
  &::after {
    content: "";
    @apply absolute left-0 sm:left-[50%] top-0 bottom-0 w-[3px] h-full bg-gray-200;
  }
}
.step-card {
  @apply sm:w-1/2 text-left sm:text-right relative;
  &__title {
    @apply text-xl sm:text-2xl font-semibold text-gray-500 my-2;
  }
  &__text {
    @apply max-w-sm text-gray-500;
  }
  &::before {
    content: "";
    @apply absolute top-8 w-5 sm:w-8 h-[3px] bg-gray-200 left-0 sm:left-auto sm:right-0;
  }
  &:nth-child(odd) {
    @apply pl-10 sm:pl-0 sm:pr-20 lg:pr-28;
    .step-card__icon {
      @apply sm:ml-auto;
    }
    .step-card__text {
      @apply ml-auto;
    }
  }
  &:nth-child(even) {
    @apply ml-auto text-left pl-10 sm:pl-20 lg:pl-28;
    .step-card__icon {
      @apply sm:mr-auto sm:ml-0;
    }
    &::before {
      content: "";
      @apply left-0 right-auto;
    }
  }
  & + .step-card {
    @apply mt-10 sm:mt-0;
  }
}
</style>