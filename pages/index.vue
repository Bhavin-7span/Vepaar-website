<template>
  <div>
    <!-- Hero Section: Start -->
    <TheHero
      title="One-stop solution"
      subTitle="to managing your business"
      textContent="Without any possible doubt, reaching out to customers via WhatsApp is the next big thing in business! Vepaar provides you with the essential tools that allow you to manage your business effortlessly without diving deep into the technicalities. 
  "
      link="https://web.vepaar.com/#/signup"
    ></TheHero>
    <!-- Hero Section: End -->

    <!-- Content Section: Start -->
    <TheContent
      title="WhatsApp CRM"
      subTitle="Use WhatsApp to expand your business"
      content="Allow your business to reap the benefits of the most commonly used messaging apps in the world."
      image="extension.jpg"
    />
    <!-- Content Section: End -->

    <!-- Best Feature Section: Start -->
    <TheBestFeature
      title="We acknowledge your business needs thus bring"
      subTitle="forth the most remarkable feature <br/>WhatsApp has to offer"
      content="Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.  
  "
      :isFeatureRow="true"
      :features="features1"
    />
    <!-- Best Feature Section: End -->

    <!-- Review Section: Start -->
    <TheReview />
    <!-- Review Section: End -->

    <!-- Content Section: Start -->
    <TheContent
      title="Selling Made Easy"
      subTitle="Vepaar store makes everything easy for your online business"
      content="Many easy selling features are made available for you"
      image="admin-panel.jpg"
    />
    <!-- Content Section: End -->

    <!-- Best Feature Section: Start -->
    <TheBestFeature
      title="Businesses all over "
      subTitle="the world count on us"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
      :features="features2"
      :isFeatureRow="true"
    />
    <!-- Best Feature Section: End -->

    <!-- Row Section: Start -->
    <TheRow
      title="WhatsApp poll"
      subTitle="Gather reliable data through WhatsApp Poll"
      content="You can make use of polls to collect feedback from clients. Polls provide first-hand information which can be beneficial in improving your business. "
      image="whatsapp-poll.png"
    />
    <!-- Row Section: End -->

    <!-- Row Section: Start -->
    <TheRow
      title="Create WhatsApp Link"
      subTitle="Send Predefined Messages"
      content="Vepaar allows you to create your WhatsApp Link, which can be easily shared on social media. Your customers can use this link to initiate conversations with you on WhatsApp."
      image="whatsapp-link.png"
      :isReverse="true"
    />
    <!-- Row Section: End -->

    <!-- Support Section: Start -->
    <TheSupport />
    <!-- Support Section: End -->

    <!-- Testimonial Section: Start -->
    <TheTestimonial />
    <!-- Testimonial Section: End -->

    <!-- Users Section: Start -->
    <TheUsersCounter />
    <!-- Users Section: End -->

    <!-- Clients Logo: Start -->
    <TheClients />
    <!-- Clients Logo: End -->
  </div>
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "default"
});
export default {
  data() {
    return {
      features1: [
        {
          icon: "book-account.svg",
          title: "Customer Profile",
          text:
            "Build your customer profile so that we have a record of your details and the conversations we have had in the past."
        },
        {
          icon: "tags-icon.svg",
          title: "Sales Funnels/Tags",
          text:
            "Sales Funnels allow you to filter your leads as per some funnel stages. The feature has proven to be effective in converting your leads to customers."
        },
        {
          icon: "bookmark-icon.svg",
          title: "AutoSave Chat",
          text:
            "This feature helps you Sync the WhatsApp chat of any customer or group. You can view these chats or media files from your Vepaar account."
        },
        {
          icon: "flag-icon.svg",
          title: "Ticket & Activity Management",
          text:
            "Manage your customer tickets easily and ensure seamless customer support. Prioritize tickets and update their status effortlessly."
        }
      ],
      features2: [
        {
          icon: "package-icon.svg",
          title: "Variable/Digital Products",
          text:
            "Allow a set of variations on a product while configuring a number of variables at your convenience. Vepaar even facilitates to sell digital products like eBooks, licenses, etc."
        },
        {
          icon: "cart-icon.svg",
          title: "Checkout Configurations",
          text:
            "Now, you can have your custom-made checkout page where you can add new steps and reduce some. "
        },
        {
          icon: "clipboard-icon.svg",
          title: "Inventory Management",
          text:
            "Keep track of your products and their stock from anywhere with the most efficient inventory management features. "
        },
        {
          icon: "payment-icon.svg",
          title: "Multiple Payment Integrations",
          text:
            "Your customers can have the luxury of choosing from a list of payment gateways from your online shop."
        }
      ]
    };
  }
};
</script>