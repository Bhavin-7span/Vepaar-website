<template>
  <div>
    <!-- Hero Section: Start -->
    <TheHero
      title="WhatsApp Link Generator"
      subTitle="Get your own WhatsApp Link"
      isHeightAuto
    ></TheHero>
    <!-- Hero Section: End -->

    <!-- LinkForm: Start -->
    <TheLinkForm id="whatsapp-link" />
    <!-- LinkForm: End -->

    <!-- SocialMedia Counter: Start -->
    <TheSocialMediaCounter />
    <!-- SocialMedia Counter: End -->

    <!-- WhatsApp Link Steps: Start -->
    <TheLinkSteps />
    <!-- WhatsApp Link Steps: End -->

    <!-- FAQ : Start -->
    <TheFaq :faqs="faqs" />
    <!-- FAQ : End -->

    <!-- Review Section: Start -->
    <TheReview color="light" />
    <!-- Review Section: End -->

    <!-- The CTA: Start -->
    <TheCta
      tagline="Trusted by 100k+ Business Worldwide"
      title="Create & Share your WhatsApp link"
      description="Create a WhatsApp link for your business in just 3 simple steps and get more customer to your WhatsApp."
      getStarted
    />
    <!-- The CTA: End -->
  </div>
</template>
<script setup>
import ogImage from "/images/og-products-vepaar.png";
import schema from "@/data/schema";
useHead({
  title: "Free WhatsApp Business Link Generator | Vepaar",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Generate your WhatsApp Link with a personalized message to get more customers for your online business"
    },
    {
      property: "og:title",
      hid: "og:title",
      name: "og:title",
      content: "Free WhatsApp Business Link Generator | Vepaar"
    },
    {
      property: "og:description",
      hid: "og:description",
      name: "og:description",
      content:
        "Generate your WhatsApp Link with a personalized message to get more customers for your online business"
    },
    {
      hid: "og:image",
      property: "og:image",
      content: ogImage
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://vepaar.com/whatsapp-link-generator/"
    }
  ],
  script: [schema("https://www.vepaar.com/whatsapp-link-generator/")]
});
</script>
<script>
export default {
  data() {
    return {
      faqs: [
        {
          question:
            "How much does it charge to generate a personalized WhatsApp link?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Why is the website asking if I want to send message?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Does this link work in my country?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question: "Where can I report a bug or an issue?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>