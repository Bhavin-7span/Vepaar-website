<template>
  <!-- Hero Section: Start -->
  <TheHero title="Understand users in better way" subTitle="through WhatsApp Poll." textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat." href="#"></TheHero>
  <!-- Hero Section: End -->

  <!-- Review Section: Start -->
  <TheReview color="light"/>
  <!-- Review Section: End -->

  <!-- Content Section: Start -->
  <TheContent 
    title="Dashboard And Orders"
    subTitle="Lorem Ipsum Dolor Sit Amet."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
    image="polls-screenshot.jpg"
  />
  <!-- Content Section: End -->

  <!-- Best Feature Section: Start -->
  <TheBestFeature
    class="module--feature-bg"
    title="Features that help you build quick polls"
    subTitle="and share it on WhatsApp."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
    :features="features"
    cols3
  />
  <!-- Best Feature Section: End -->

  <!-- Poll Step: Start -->
  <ThePollSteps />    
  <!-- Poll Step: Start -->

  <!-- The CTA: Start -->
  <TheCta 
    tagline="Powered by Official WhatsApp Business APIs"
    title="Polls on WhatsApp"
    description="Nothing builds brand loyalty like showing your customers that you value their opinions over everything else. Use WhatsApp polls to engage with your buyers and gather important data that you can segment and implement in your future marketing campaigns."  
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
          icon:"multiple-votes.svg",
          title:"Single or Multiple Votes",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"result.svg",
          title:"Public or Private Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"data.svg",
          title:"See Data of Poll in Real Time",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"poll-status.svg",
          title:"Regulate Poll Status",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"multi-language.svg",
          title:"Multi-Language Poll",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"export-result.svg",
          title:"Export Poll Result in .pdf,.xls, etc",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"theme.svg",
          title:"Personalise Theme of Poll Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"user-feedback.svg",
          title:"User Feedback",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"market-research.svg",
          title:"Market Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"customer-engagement.svg",
          title:"Customer Engagement",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"social-media-research.svg",
          title:"Social Media Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"short-survey.svg",
          title:"Short Survey",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"learn-about-audience.svg",
          title:"Learn about your Audience",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        }
      ]
    }
  }
}
</script>