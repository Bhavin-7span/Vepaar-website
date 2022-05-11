<template>
  <!-- Hero Section: Start -->
  <TheHero
    title="WhatsApp Link"
    subTitle="in a Single Click"
    isHeightAuto
  ></TheHero>
  <!-- Hero Section: End -->

  <!-- LinkForm: Start -->
  <TheLinkForm />
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
    title="Get Started with Vepaar today!"
    description="One of the best free apps for small business owners! With our powerful yet simple tools, bring your store to the global platform at ease."
  />
  <!-- The CTA: End -->
</template>

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