<template>
  <section class="module module--team">
    <div class="pt-20 pb-32 bg-gray-900">
      <div class="container">
        <img src="/images/team-photo.jpg" alt="" class="rounded-xl" />
        <div class="sm:flex items-center mt-8">
          <h3 class="text-white text-2xl font-semibold sm:px-5">Our Team</h3>
          <p class="flex-1 text-gray-400 mt-5 sm:mt-0">
            Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim
            adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque
            arcu enim adipiscing vitae.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto sm:flex -mt-20">
      <div
        v-for="(team, index) in teams"
        :key="index"
        class="px-5"
        :class="index == 0 ? '' : 'mt-20 sm:mt-0'"
      >
        <img :src="'/images/' + team.profile" alt="" class="rounded-xl" />

        <div class="my-4">
          <h3 class="text-2xl font-semibold text-gray-900">{{ team.name }}</h3>
          <p class="text-gray-500">{{ team.designation }}</p>
        </div>
        <p class="text-gray-400">
          {{ team.description }}
        </p>
        <div class="flex mt-5">
          <a
            v-for="(link, index) in team.socialMedia"
            :key="index"
            :href="link.link"
            :class="index == 0 ? '' : 'ml-4'"
            class="transition-all duration-300 hover:-translate-y-1"
          >
            <img :src="'/images/' + link.icon" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      teams: [
        {
          profile: "kaushal-gajjar.jpg",
          name: "Kaushal Gajjar",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        },
        {
          profile: "harsh-kansagara.jpg",
          name: "Harsh Kansagara",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        },
        {
          profile: "hemratna-bhimani.jpg",
          name: "Hemratna Bhimani",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.module--team {
  @apply pt-0 pb-32;
}
</style>