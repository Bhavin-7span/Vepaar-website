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
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
});
</script>