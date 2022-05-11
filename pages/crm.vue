<template>
  <!-- Hero Section: Start -->
  <TheHero title="Power Up Your Whatsapp Web" subTitle="to Improve Your Relationship With Your Customer.
" textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."></TheHero>
  <!-- Hero Section: End -->

  <!-- Review Section: Start -->
  <TheReview color="light"/>
  <!-- Review Section: End -->

  <!-- Content Section: Start -->
  <TheContent 
    title="Dashboard And Orders"
    subTitle="Lorem Ipsum Dolor Sit Amet."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
    image="extension.jpg"
  />
  <!-- Content Section: End -->

  <!-- Best Feature Section: Start -->
  <TheBestFeature
    class="module--feature-bg"
    title="We Empathise Your Needs And Provide"
    subTitle="You Best Feature To Stimulate The WhatsApp."
    content="Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all."
    :features="features"
  />
  <!-- Best Feature Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Build Customer Profile From WhatsApp"
    :points="customerFeature"
    image="customer-profile-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->
  
  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Log sales activity While chatting on WhatsApp"
    isReverse
    :points="notesFeature"
    image="notes-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Save messages, Media from WhatsApp"
    :points="messageFeature"
    image="messages-screenshot.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Auto sync all the conversations from WhatsApp"
    :points="chatSyncFeature"
    image="chat-saved-screenshot.jpg"
    isReverse
  />
  <!-- Feature Row Section: End -->

  <!-- The Apps: Start -->
   <TheApps image="app-pattern.png">
    <h2 class="text-2xl lg:text-5xl font-semibold text-white">
      Your Chrome Extension is Integrated with 
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 ">Business Apps you use every day.</span>
    </h2>
  </TheApps>
  <!-- The Apps: End -->

  <!-- Clients Logo: Start -->
  <TheClients />
  <!-- Clients Logo: End -->

  <!-- The CTA: Start -->
  <TheCta 
    tagline="Trusted by 100k+ Businesses Worldwide"
    title="#1 CRM for WhatsApp"
    description="Vepaar helps you semi-automate your business workflow with CRM-like features. You can create customer profiles, save media and messages, send personalized quick replies, organize WhatsApp polls, build your e-commerce store, launch your online business page and so much more!"  
  />
  <!-- The CTA: End -->
</template>
<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "default",
});
export default {
  data(){
    return{
      features:[
        {
          icon:"filter.svg",
          title:"Sales Funnel",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"tags.svg",
          title:"Contact Tags",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"profile.svg",
          title:"Build Customer Profile",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"ticket.svg",
          title:"Ticket Management",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"bulk-import.svg",
          title:"Bulk Import/Export",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"chrome-extension.svg",
          title:"Chrome Extension",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      customerFeature:[
        {
          title:'Save Important Customer Data',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Sync Leads With Different CRMs',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      notesFeature:[
        {
          title:'Log Multiple Notes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Record Sales Activity',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      messageFeature:[
        {
          title:'Save Important Text Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Save Video, PDF, Audio Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      chatSyncFeature:[
        {
          title:'Sync With Your Phone',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Export Synced Conversations',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}
</script>