<template>
  <!-- Hero Section: Start -->
  <TheHero title="Simplest and Easiest Way" subTitle="to Create Your Online Store" textContent="Be a part of the Vepaar Community, with oveer 100k eentrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button below to start your digital store in minutes!" href="#"></TheHero>
  <!-- Hero Section: End -->

  <!-- Review Section: Start -->
  <TheReview color="light"/>
  <!-- Review Section: End -->

  <!-- Content Section: Start -->
  <TheContent 
    title="Dashboard And Orders"
    subTitle="Lorem Ipsum Dolor Sit Amet."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
    image="order-screenshot.jpg"
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
    title="Sell Digital Products"
    :points="productFeature"
    image="sell-digital-product.jpg"
  />
  <!-- Feature Row Section: End -->
  
  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Create Variable Products"
    isReverse
    :points="variableProductFeature"
    image="variable-product.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Checkout Customisation & Add-ons"
    :points="customisationFeature"
    image="checkout-customisation.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Increase your sales with Discount Coupons"
    :points="discountFeature"
    image="discount-coupons.jpg"
    isReverse
  />
  <!-- Feature Row Section: End -->

  <!-- The Apps: Start -->
  <TheApps image="payment-methods.png">
    <h2 class="text-2xl lg:text-5xl font-semibold text-white">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 ">Payment Integrations</span>
      to make Vepaar transactions smother than ever!
    </h2>
  </TheApps>
  <!-- The Apps: End -->

  <!-- Clients Logo: Start -->
  <TheClients />
  <!-- Clients Logo: End -->

  <!-- The CTA: Start -->
  <TheCta 
    tagline="Trusted by 100k+ Businesses Worldwide"
    title="Make your business the next obsession."
    description="Be a part of the Vepaar Commmunity, with over 100k entrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button to start your digital storre in minutes!"  
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
          icon:"package.svg",
          title:"Product",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"shape.svg",
          title:"Categories",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"badges.svg",
          title:"Badges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"charges.svg",
          title:"Charges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"clipboard.svg",
          title:"Inventory",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"truck.svg",
          title:"Shipping",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      productFeature:[
        {
          title:'Sell Ebooks, Software, Audiom Media etc',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Customize Checkout for Products',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      variableProductFeature:[
        {
          title:'Product Variants',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Create Custom Attributes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      customisationFeature:[
        {
          title:'Checkout Add-ons',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Authentication via WhatsApp',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      discountFeature:[
        {
          title:'Coupon Management',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Restriction & Usage Limits',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}
</script>