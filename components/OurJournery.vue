<template>
  <section class="module module--journey">
    <div class="container">
      <h2 class="text-4xl sm:text-5xl text-gray-900 font-semibold">
        Our Journey
      </h2>
      <div class="mt-10 sm:mt-20">
        <div class="journey-card" v-for="(data, index) in journey" :key="index">
          <div class="journey-card__year">
            <h3 class="text-gray-400 text-xl sm:text-3xl font-semibold mt-5">
              {{ data.year }}
            </h3>
          </div>
          <div class="journey-card__content">
            <div
              v-for="(item, index) in data.content"
              :key="index"
              class="journey-box"
            >
              <div v-if="item.icon">
                <img :src="'/images/' + item.icon" />
                <h3
                  class="
                    font-semibold
                    text-transparent
                    bg-clip-text bg-gradient-to-r
                    from-primary-500
                    via-purple-500 via-deep-purple-500
                    to-pink-500
                    text-2xl
                    sm:text-3xl
                    my-4
                  "
                >
                  {{ item.title }}
                </h3>
                <div class="mt-2">
                  <p
                    v-for="(text, index) in item.description"
                    :key="index"
                    class="text-gray-400 text-base sm:text-lg"
                    :class="index == 0 ? '' : 'mt-2'"
                  >
                    {{ text }}
                  </p>

                  <p class="text-gray-500 text-xl font-semibold mt-5">
                    {{ item.date }}
                  </p>
                </div>
              </div>
              <div v-else class="journey-box-bg">
                <h2
                  class="
                    font-semibold
                    text-transparent
                    bg-clip-text bg-gradient-to-r
                    from-primary-500
                    via-purple-500 via-deep-purple-500
                    to-pink-500
                    text-xl
                    sm:text-5xl
                  "
                >
                  {{ item.title }}
                </h2>
                <p
                  class="
                    max-w-sm
                    mx-auto
                    text-gray-400 text-base
                    sm:text-lg
                    mt-4
                  "
                >
                  {{ item.description }}
                </p>
              </div>
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
      journey: [
        {
          year: 2015,
          content: [
            {
              icon: "idea-icon.svg",
              title: "Not just another idea/An idea that changed our lives!",
              description: [
                "We’re cricket enthusiasts and we're looking for a way to post score updates on WhatsApp. Voila! We’re here now with a tool that helps many.",
                "Once we decided on WhatsApp as our platform, we went ahead and designed a BOT that works on #Hashtags of consumers such as #cricket, #news #weather…you get the gist."
              ],
              date: "Jan 2015"
            },
            {
              icon: "featured-icon.svg",
              title: "TechCrunch Feature!",
              description: [
                "We made it to TechCrunch, “A Virtual Assistant to WhatsApp” and the great visibility led us to expand our Bot to WhatsApp Marketing services."
              ],
              date: "Dec 2015"
            }
          ]
        },
        {
          year: 2019,
          content: [
            {
              title: "10K+ people liked us!",
              description:
                "Our first milestone in the journey! The cricket score updates gained popularity and spread the word about an ultra-cool platform in town.. That’s us!)"
            },
            {
              icon: "cart.svg",
              title: "WhatsApp Store",
              description: [
                "Our WhatsApp Store went online, making us one of a kind and first in this industry. With WhatsHash we were set to revolutionize how brands can connect their stores to consumers via WhatsApp texts."
              ],
              date: "Jan 2019"
            }
          ]
        },
        {
          year: 2021,
          content: [
            {
              icon: "rebranding.svg",
              title: "Veepar is born!",
              description: [
                "We were constantly taking notes and ever-evolving. We wanted to start the year off with a bang, and in 2021, we created a whole new identity that reflected all we have done to support the growth of business on WhatsApp and tell consumers about our authentic selves. A star is born- Veepar!"
              ],
              date: "Apr 2021"
            }
          ]
        },
        {
          year: 2022,
          content: [
            {
              title: "100k+ Users onboarded!",
              description:
                "We’ve been growing and reached a staggering 100k+ users. A milestone that speaks for itself. Veepar is always evolving, and we’re here to bring the best WhatsApp Marketing Services for you to scale like never before."
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.journey-card {
  @apply flex;
  &__year {
    @apply relative w-20 sm:w-40 border-r-[3px] border-gray-200 mr-8 sm:mr-28;
    &::after {
      content: "";
      @apply absolute right-0 top-8 sm:top-10 w-5 sm:w-10 h-[3px] bg-gray-200;
    }
  }
  &__content {
    @apply flex-1;
  }
  & + .journey-card {
    @apply mt-20;
  }
}
.journey-box {
  @apply mt-0;
  .journey-box-bg {
    @apply text-center bg-gray-100 rounded-lg p-5 sm:p-8;
  }
  & + .journey-box {
    @apply mt-14;
  }
}
</style>