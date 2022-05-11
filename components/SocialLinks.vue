<template>
  <div class="sm:ml-auto flex justify-between sm:block">
    <a
      v-for="(social, index) in socialLinks"
      :key="index"
      :href="social.link"
      :class="index == 0 ? 'inline-flex' : 'block ml-2 sm:ml-0 sm:mt-4'"
    >
      <img :src="'images/' + social.icon" alt="" class="w-8" />
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: "facebook.svg",
          link: "javascript:;"
        },
        {
          icon: "whatsapp.svg",
          link: "javascript:;"
        },
        {
          icon: "youtube.svg",
          link: "javascript:;"
        },
        {
          icon: "linkedin.svg",
          link: "javascript:;"
        },
        {
          icon: "twitter.svg",
          link: "javascript:;"
        }
      ]
    };
  }
};
</script>