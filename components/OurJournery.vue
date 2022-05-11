<template>
  <section class="module module--journey">
    <div class="container">
      <h2 class="text-4xl sm:text-5xl text-gray-900 font-semibold">
        Our Journey So Far
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
                <img :src="'images/' + item.icon" />
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
              title: "Project Idea",
              description: [
                "We started this project with the idea of posting cricket score updates on WhatsApp.",
                "After finalizing various on-demand services on WhatsApp, we had decided upon the idea to setup BOT to send responses based on the #Hashtags sent from users, such as #cricket, #news, #weather, and so on."
              ],
              date: "Jan 2015"
            },
            {
              icon: "featured-icon.svg",
              title: "Got Featured on TechCrunch",
              description: [
                "In the article titled ‘A Virtual Assistant To WhatsApp’, WhatsHash got featured on TechCrunch and got good visibility in the realm of WhatsApp Marketing services."
              ],
              date: "Dec 2015"
            }
          ]
        },
        {
          year: 2019,
          content: [
            {
              title: "10k+ Users",
              description:
                "Achieving a Goal. We started this project with the idea of posting cricket score updates on WhatsApp."
            },
            {
              icon: "cart.svg",
              title: "Store on WhatsApp",
              description: [
                "Along with many updates, we released the Online Store on WhatsApp. Thus, WhatsHash became the first ever solution provider to help brands bring their eCommerce stores to their customers’ WhatsApp texts."
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
              title: "Rebranding to Vepaar",
              description: [
                "WhatsHash has evolved constantly over the years. Yet, we wanted to kickstart 2021 with a brand new identity; one that would reflect our journey of helping businesses succeed on WhatsApp and also describe who we are as a company. So, say hello to Vepaar!"
              ],
              date: "Apr 2021"
            }
          ]
        },
        {
          year: 2022,
          content: [
            {
              title: "100k+ Users",
              description:
                "Achieving a Goal. We started this project with the idea of posting cricket score updates on WhatsApp."
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