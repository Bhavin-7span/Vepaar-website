<template>
  <div class="main">
    <TheHeader />
    <div class="pt-16 lg:pt-20">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
<script setup>
useHead({
  title: "Vepaar: Boost your Online Business with All-In-One App", // or, title => `My App - ${title}`
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
});
</script>