<template>
  <!-- Hero Section: Start -->
  <TheHero
    title="Start Selling"
    subTitle="Online for Free"
    textContent="Join our community of over 100k entrepreneurs and begin selling. Don’t think twice, this is the easiest way to start your online store."
    link="#"
    buttonLabel="Sign up for Free!"
  ></TheHero>
  <!-- Hero Section: End -->

  <!-- Review Section: Start -->
  <TheReview color="light" />
  <!-- Review Section: End -->

  <!-- Content Section: Start -->
  <TheContent
    title="Insightful Dashboard and Orders"
    subTitle="The Perfect Dashboard to Manage Everything"
    content="Visit the Dashboard for important statistics and start with your sales journey"
    image="order-screenshot.jpg"
  />
  <!-- Content Section: End -->

  <!-- Best Feature Section: Start -->
  <TheBestFeature
    class="module--feature-bg"
    title="Everything you need "
    subTitle="to sell online"
    content="Under the ‘Store’ section, you can use countless features, all of which help you manage your business easily."
    :features="features"
  />
  <!-- Best Feature Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-products"
    title="Sell Digital Products"
    :points="productFeature"
    image="sell-digital-product.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-variable"
    title="Create Variable Products"
    isReverse
    :points="variableProductFeature"
    image="variable-product.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    class="module--row-checkout"
    title="Checkout Customization and Add-ons"
    :points="customizationFeature"
    image="checkout-customisation.jpg"
  />
  <!-- Feature Row Section: End -->

  <!-- Feature Row Section: Start -->
  <FeatureRow
    title="Use Discount Coupons to Increase Sales"
    :points="discountFeature"
    image="discount-coupons.jpg"
    isReverse
  />
  <!-- Feature Row Section: End -->

  <!-- The Apps: Start -->
  <TheApps image="payment-methods.png">
    <h2 class="text-2xl lg:text-5xl font-semibold text-white">
      <span
        class="
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-primary-500
          via-purple-500 via-deep-purple-500
          to-pink-500
        "
        >Payment Integrations</span
      >
      to make Vepaar transactions smother than ever!
    </h2>
  </TheApps>
  <!-- The Apps: End -->

  <!-- Clients Logo: Start -->
  <TheClients />
  <!-- Clients Logo: End -->

  <!-- The CTA: Start -->
  <TheCta
    title="Start your online store now!"
    description="Create and manage the online store of your dreams at Vepaar. Get your Free online store in just 30 seconds. 
"
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
          icon: "package.svg",
          title: "Product",
          text:
            "Create any or all of the three products - simple, variable, and digital."
        },
        {
          icon: "shape.svg",
          title: "Categories",
          text:
            "Design your product catalog with as many categories as you wish to create."
        },
        {
          icon: "badges.svg",
          title: "Badges",
          text:
            "Easily make customized badges so that a particular product can stand out"
        },
        {
          icon: "charges.svg",
          title: "Charges",
          text:
            "Set up Taxes, Bulk Order Fees, Gift Weapping or any other charges as per requirements."
        },
        {
          icon: "clipboard.svg",
          title: "Inventory",
          text:
            "Keep track of your stock and modify the product quantity easily."
        },
        {
          icon: "truck.svg",
          title: "Shipping",
          text:
            "Mention the areas you provide delivery services along with the delivery price."
        }
      ],
      productFeature: [
        {
          title: "E-Books, Audio, Software, Media, etc",
          description:
            "Your online store on Vepaar isn’t just confined to selling physical commodities. There is a huge market for digital products, and Vepaar allows you to capitalize on it."
        },
        {
          title: "Customize checkout for Products",
          description:
            "With these customisations, you will have complete control on your checkout form. Enable or Disable the fields that you want to show/hide in checkout."
        }
      ],
      variableProductFeature: [
        {
          title: "Product Variants",
          description:
            "Make several product variants while opting to alter the product variables as per your choice. Choose to control stock, price, image, etc., and come up with variations just as you want."
        },
        {
          title: "Create Custom Attributes",
          description:
            "Every product has a number of attributes that you can customize with Vepaar. Name the attribute and select the values as per your need."
        }
      ],
      customizationFeature: [
        {
          title: "Checkout Add-ons",
          description:
            "Many products require gift-wrapping or writing a small message. These add-on features can be used to avail of these extra services that the business has to offer."
        },
        {
          title: "Authenticating User through WhatsApp",
          description:
            "For a quicker checkout, Vepaar allows your clients to place an order via WhatsApp. A short authentication process needs to be followed for this step, and you’re all set."
        }
      ],
      discountFeature: [
        {
          title: "Coupon Management",
          description:
            "Create, describe and manage coupon codes for your customers. Enable or disable your coupon codes at any time you want."
        },
        {
          title: "User Restriction and Usage Limits",
          description:
            "Clearly state the minimum and maximum discount amounts. Choose whether or not to display the coupon on your store. You can also put a usage limit on each coupon."
        }
      ]
    };
  }
};
</script>