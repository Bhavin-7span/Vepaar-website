<template>
  <div>
    <!-- Hero Section: Start -->
    <TheHero
      title="About Us"
      subTitle="The Story Behind Our Story"
      isHeightAuto
    ></TheHero>
    <!-- Hero Section: End -->

    <!-- Review Section: Start -->
    <TheReview color="light" />
    <!-- Review Section: End -->

    <!-- Mission Section: Start -->
    <Mission />
    <!-- Mission Section: End -->

    <!-- Vepaar Startup Section: Start -->
    <VepaarStartup />
    <!-- Vepaar Startup Section: Start -->

    <!-- Team Section: Start -->
    <Team />
    <!-- Team Section: End -->

    <!-- Users Section: Start -->
    <TheUsersCounter />
    <!-- Users Section: End -->

    <!-- Our Journey Section: Start -->
    <OurJournery />
    <!-- Our Journey Section: End -->

    <!-- The CTA: Start -->
    <TheCta
      tagline="Trusted by 100k+ Business Worldwide"
      title="Why not join us in our splendid journey?"
      description="A team of graduates that began with a common vision back in 2015 has reached great heights. Thanks to the support of our clients, we get to serve over 100k users."
    />
    <!-- The CTA: End -->
  </div>
</template>
<script setup>
import ogImage from "/images/og-products-vepaar.png";
import schema from "@/data/schema";
useHead({
  title: "About Us | Vepaar",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Vepaar was founded with the idea to support small and medium businesses across the globe to set up their digital store."
    },
    {
      property: "og:title",
      hid: "og:title",
      name: "og:title",
      content: "About Us | Vepaar"
    },
    {
      property: "og:description",
      hid: "og:description",
      name: "og:description",
      content:
        "Vepaar was founded with the idea to support small and medium businesses across the globe to set up their digital store."
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
      href: "https://vepaar.com/about-us/"
    }
  ],
  script: [schema("https://vepaar.com/about-us/")]
});
</script>