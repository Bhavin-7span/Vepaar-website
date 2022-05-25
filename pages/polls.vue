<template>
  <div>
    <!-- Hero Section: Start -->
    <TheHero
      title="Engage with Consumers"
      subTitle="Efficiently with Whatsapp Poll."
      textContent="Use Whatsapp Polls to understand consumer behavior better and make informed decisions for your upcoming campaigns."
      link="#"
    ></TheHero>
    <!-- Hero Section: End -->

    <!-- Review Section: Start -->
    <TheReview color="light" />
    <!-- Review Section: End -->

    <!-- Content Section: Start -->
    <TheContent
      title="Insightful Dashboard"
      subTitle="with Poll Results"
      content="The Dashboard space will allow you to view the WhatsApp polls you’ve conducted. You have the options to view, pin or share your polls. "
      image="polls-screenshot.jpg"
    />
    <!-- Content Section: End -->

    <!-- Best Feature Section: Start -->
    <TheBestFeature
      class="module--feature-bg"
      title="Features that create quick and effective"
      subTitle="Polls for WhatsApp."
      content="Use our feature suite to make polls that drive results. Get better data in a comprehensive form to create better campaigns for the future. Collect opinions that matter."
      :features="features"
      cols2
    />
    <!-- Best Feature Section: End -->

    <!-- Poll Step: Start -->
    <ThePollSteps />
    <!-- Poll Step: Start -->

    <!-- The CTA: Start -->
    <TheCta
      tagline="Powered by Official WhatsApp Business APIs"
      title="Poll on WhatsApp to grow your business"
      description="With this another remarkable feature at Vepaar, you will gain insights into the current business scenario and help you understand your customers' needs."
    />
    <!-- The CTA: End -->
  </div>
</template>
<script setup>
import ogImage from "/images/og-polls-vepaar.png";
import schema from "@/data/schema";
useHead({
  title: "WhatsApp Poll | Vepaar - Create an online Poll or Survey",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Create a poll on WhatsApp via Vepaar. Powered by Official WhatsApp Business APIs. Get customer feedback and engage with your audience via WhatsApp Polls."
    },
    {
      property: "og:title",
      hid: "og:title",
      name: "og:title",
      content: "WhatsApp Poll | Vepaar - Create an online Poll or Survey"
    },
    {
      property: "og:description",
      hid: "og:description",
      name: "og:description",
      content:
        "Create a poll on WhatsApp via Vepaar. Powered by Official WhatsApp Business APIs. Get customer feedback and engage with your audience via WhatsApp Polls."
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
      href: "https://vepaar.com/poll/"
    }
  ],
  script: [schema("https://www.vepaar.com/poll/")]
});
</script>
<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "multiple-votes.svg",
          title: "Single or Multiple Votes",
          text:
            "Allow customers to vote on one option or multiple based on your expectations from the poll."
        },
        {
          icon: "result.svg",
          title: "Realtime Result",
          text:
            "Get the result to analyze in real-time, and never stay wondering with insights provided in the blink of an eye."
        },
        {
          icon: "data.svg",
          title: "Public or Private Results",
          text:
            "Have the liberty to choose whether the world can see your poll results or not."
        },
        {
          icon: "poll-status.svg",
          title: "Regulate Poll Status",
          text:
            "You get to decide whether you want to continue a poll or not and thus regulate poll status accordingly."
        },
        {
          icon: "multi-language.svg",
          title: "Multi-Lingual Polls",
          text:
            "Let language never be a barrier to understanding your audience. Create your polls in your desired language."
        },
        {
          icon: "export-result.svg",
          title: "Export Results",
          text:
            "With easy export options available, export poll result in .pdf, .xls etc."
        },
        {
          icon: "theme.svg",
          title: "Personalized Theme of Poll Result",
          text:
            "Make the changes on poll result based on the available personalization by changing it around the way you like."
        },
        {
          icon: "user-feedback.svg",
          title: "User Feedback",
          text:
            "There’s always room for improvement; learn from your consumers how you can serve better."
        },
        {
          icon: "market-research.svg",
          title: "Market Research",
          text:
            "Nothing better than learning from customers directly what they want-use this feature to gather the right data for successful campaigns."
        },
        {
          icon: "customer-engagement.svg",
          title: "Engage your customer",
          text:
            "Make your customer feel valued and heard by engaging them in surveys for proactive interactions."
        },
        {
          icon: "social-media-research.svg",
          title: "Social Media",
          text:
            "Leverage the holy grail of understanding your audience by reaching out to them via the most used social media platform."
        },
        {
          icon: "short-survey.svg",
          title: "Short Survey",
          text:
            "Do surveys that are short yet in-depth to collect actionable insights."
        },
        {
          icon: "learn-about-audience.svg",
          title: "Know your Audience",
          text:
            "Polls are an easy to consume yet effective channel to learn what your audience is looking for make winning campaigns for rapid growth."
        }
      ]
    };
  }
};
</script>