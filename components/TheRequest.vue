<template>
  <section class="module module--request bg-gray-900">
    <div class="container">
      <div class="sm:flex max-w-3xl mx-auto">
        <RequestCard
          v-for="(request, index) in requests"
          :key="index"
          :data="request"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      requests: [
        {
          title: "Large Scale Enterprise",
          label: "Looking for a custom solution?",
          description:
            "At Vepaar we apply over a decade of our experiences to help you meet your business goals.",
          buttonLabel: "Chat With Us",
          buttonLink:
            "https://api.whatsapp.com/send?phone=918866588661&text=I%20want%20to%20know%20more%20about%20Enterprise%20Account%20on%20Vepaar"
        },
        {
          title: "Want to learn more?",
          label: "Request a demo with us",
          description:
            "We’ll focus on evaluating your current business process, problems and goals, and how Vepaar would help with better results.",
          buttonLabel: "Request Demo",
          buttonLink:
            "https://api.whatsapp.com/send?phone=918866588661&text=I%20want%20to%20know%20more%20about%20Startup%20or%20NGO%20Plans%20on%20Vepaar"
        }
      ]
    };
  }
};
</script>