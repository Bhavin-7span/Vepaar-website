<template>
  <nav>
    <NuxtLink
      v-for="(nav, index) in navigations"
      :key="index"
      :to="nav.link"
      class="button button--nav"
    >
      {{ nav.name }}
    </NuxtLink>
  </nav>
</template>
<script setup>
const navigations = [
  {
    name: "CRM",
    link: "/crm"
  },
  {
    name: "Store",
    link: "/store"
  },
  {
    name: "Download",
    link: "download"
  },
  {
    name: "Pricing",
    link: "pricing"
  }
];
</script>