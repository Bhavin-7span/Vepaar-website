<template>
  <!-- Hero Section: Start -->
  <TheHero
    title="Amplify WhatsApp Web"
    subTitle="And Skyrocket Your Conversation"
    textContent="Now you can expand the functionalities of the most powerful messaging tool and get the most out of your business."
    link="#"
  ></TheHero>
  <!-- Hero Section: End -->

  <!-- Review Section: Start -->
  <TheReview color="light" />
  <!-- Review Section: End -->

  <!-- Content Section: Start -->
  <TheContent
    title="Easily Assess"
    subTitle="Your Business Activities"
    content="Our dashboard gives you a bird’s-eye view of your business metrics. You can also get a glimpse of your leads anytime, anywhere"
    image="extension.jpg"
    :ctaButton="false"
  />
  <!-- Content Section: End -->

  <!-- Best Feature Section: Start -->
  <TheBestFeature
    class="module--feature-bg"
    title="We Acknowledge Your Business Needs"
    subTitle="And Thus Bring Forward The Most Remarkable Feature WhatsApp Has To Offer"
    content="Vepaar has come up with a good number of features that allow you to turn WhatsApp from a typical messaging app into your business partner. "
    :features="features"
  />
  <!-- Best Feature Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-customer"
    title="Leverage WhatsApp To Create Customer Profiles"
    :points="customerFeature"
    image="customer-profile-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-records"
    title="Record Sales Activities While Chatting On WhatsApp"
    isReverse
    :points="notesFeature"
    image="notes-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-saving"
    title="Saving Messages And Media From WhatsApp"
    :points="messageFeature"
    image="messages-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-auto"
    title="Auto Sync Chats From WhatsApp"
    :points="chatSyncFeature"
    image="chat-saved-screenshot.jpg"
    isReverse
  />
  <!-- Feature Row Section: End -->

  <!-- The Apps: Start -->
  <TheApps image="app-pattern.png">
    <h2 class="text-2xl lg:text-5xl font-semibold text-white">
      Your Chrome Extension is Integrated with
      <span
        class="
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-primary-500
          via-purple-500 via-deep-purple-500
          to-pink-500
        "
        >Business Apps you use every day.</span
      >
    </h2>
  </TheApps>
  <!-- The Apps: End -->

  <!-- Clients Logo: Start -->
  <TheClients />
  <!-- Clients Logo: End -->

  <!-- The CTA: Start -->
  <TheCta
    tagline="Trusted by 100k+ People Worldwide"
    title="The best CRM for WhatsApp"
    description="Vepaar helps take your business to the next level by automating many aspects of your business workflow with CRM-like features. We allow you to build customer profiles, send customized replies, save media, conduct polls on WhatsApp, start your online business, and a lot more."
  />
  <!-- The CTA: End -->
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "default"
});
export default {
  data() {
    return {
      features: [
        {
          icon: "filter.svg",
          title: "Sales Funnel",
          text:
            "With our elite Sales Funnel feature, you can now turn your leads into customers with ease."
        },
        {
          icon: "tags.svg",
          title: "Tags",
          text:
            "This option helps you organize and manage your contacts and messages with tags/labels."
        },
        {
          icon: "profile.svg",
          title: "Build Customer Profile",
          text:
            "Keep a record of the usual customer information and do more by pushing those leads to your CRM via our integrations."
        },
        {
          icon: "ticket.svg",
          title: "Ticket Management",
          text:
            "Addressing customer grievances has been made more straightforward than ever. Manage your customer tickets easily and ensure seamless customer support."
        },
        {
          icon: "bulk-import.svg",
          title: "Bulk Import/Export",
          text:
            "Import or Export contacts and customer data via Excel. Update the data in bulk and even export tickets’ data."
        },
        {
          icon: "chrome-extension.svg",
          title: "Chrome Extension",
          text:
            "Generate more leads by drawing out contacts and other essential data from WhatsApp."
        }
      ],
      customerFeature: [
        {
          title: "Save Essential Customer Information",
          description:
            "Our idea of building customer profiles involves saving the basic and crucial customer data for future use."
        },
        {
          title: "Sync Leads with Other CRMs",
          description:
            "If you decide to utilize more than one CRM software, Vepaar allows you to sync all your leads with the other software with great ease. "
        }
      ],
      notesFeature: [
        {
          title: "Take Notes",
          description:
            "Several things go through your mind while talking to a lead on WhatsApp. The good thing is you don’t need to remember all the information, as you can simply take down and save notes for future use."
        },
        {
          title: "Record Activity",
          description:
            "Even while texting your customers on WhatsApp, you have the luxury of recording their activities quickly."
        }
      ],
      messageFeature: [
        {
          title: "Save Essential Text Messages",
          description:
            "Store and retrieve important text as well as media messages safely. Categorize your customers by creating and assigning tags like Contact, Message, Media, and Broedcast."
        },
        {
          title: "Save Video, Audio, and PDFs",
          description:
            "Not just text messages, Vepaar enables you to save any form of conversation with your clients. These saved files and media come in handy while reviewing past conversations."
        }
      ],
      chatSyncFeature: [
        {
          title: "Sync Your WhatsApp Chats",
          description:
            "You can easily synchronize chats with Vepaar’s web extension. Thanks to this feature, you can sync all your conversations with any person or a group without doing it yourself."
        },
        {
          title: "Export Synced Chats",
          description:
            "Once your chats and messages are automatically synced, you also have the option to export them."
        }
      ]
    };
  }
};
</script>