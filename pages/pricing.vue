<template>
  <div>
    <div id="section-offset">
      <!-- Hero Section: Start -->
      <TheHero title="Pricing" subTitle="Start free" isHeightAuto></TheHero>
      <!-- Hero Section: End -->

      <!-- Review Section: Start -->
      <TheReview color="light" />
      <!-- Review Section: End -->

      <!-- Pricing Tab: Start -->
      <PricingTab />
      <!-- Pricing Tab: End -->
    </div>

    <!-- Compare Plans: Start -->
    <ComparePlans :plans="plans" :isSticky="isSticky" />
    <!-- Compare Plans: End -->

    <!-- FAQ : Start -->
    <TheFaq :faqs="faqs" />
    <!-- FAQ : End -->

    <!-- Request : Start -->
    <TheRequest />
    <!-- Request : End -->

    <!-- Clients Logo: Start -->
    <TheClients />
    <!-- Clients Logo: End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "What is Vepaar?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "How does Vepaar help my business?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "What is the relation between WhatsApp and Vepaar?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question:
            "Will you be able to send messages to contacts on behalf of me or my contact number?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "What languages are available?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Do you charge commission on orders?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "I have a technical problem, whom should I email?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "How do I pay for the paid plans?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ],
      plans: [
        {
          title: "free",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "basic",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "pro",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "agency",
          link: "https://web.vepaar.com/#/signup"
        }
      ],
      isSticky: false,
      scrollPosition: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      var moduleHeight = document.getElementById("section-offset");
      var topPos = moduleHeight.offsetHeight + 200;
      if (this.scrollPosition >= topPos) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>