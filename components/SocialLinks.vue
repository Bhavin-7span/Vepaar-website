<template>
  <div class="sm:ml-auto flex justify-between sm:block">
    <a
      v-for="(social, index) in socialLinks"
      :key="index"
      :href="social.link"
      :class="index == 0 ? 'inline-flex' : 'block ml-2 sm:ml-0 sm:mt-4'"
      target="_blank"
    >
      <img :src="'/images/' + social.icon" alt="" class="w-8" />
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
          link: "https://www.facebook.com/VepaarHQ"
        },
        {
          icon: "whatsapp.svg",
          link: "javascript:;"
        },
        {
          icon: "youtube.svg",
          link: "https://www.youtube.com/c/Vepaar"
        },
        {
          icon: "linkedin.svg",
          link: "https://www.linkedin.com/company/vepaar/"
        },
        {
          icon: "twitter.svg",
          link: "https://twitter.com/VepaarHQ"
        }
      ]
    };
  }
};
</script>