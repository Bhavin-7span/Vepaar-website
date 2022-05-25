<template>
  <div>
    <TheDownload />
  </div>
</template>
<script setup>
import ogImage from "/images/og-products-vepaar.png";
import schema from "@/data/schema";
useHead({
  title: "Download | Vepaar - Start your Online Business for Free",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Bring alive your dream online business. Download the Vepaar app from the Google Play store or App Store, or get our free Chrome extension for a seamless CRM experience."
    },
    {
      property: "og:title",
      hid: "og:title",
      name: "og:title",
      content: "Download | Vepaar - Start your Online Business for Free"
    },
    {
      property: "og:description",
      hid: "og:description",
      name: "og:description",
      content:
        "Bring alive your dream online business. Download the Vepaar app from the Google Play store or App Store, or get our free Chrome extension for a seamless CRM experience."
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
      href: "https://vepaar.com/download/"
    }
  ],
  script: [schema("https://www.vepaar.com/download/")]
});
</script>