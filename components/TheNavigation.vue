<template>
  <nav>
    <the-button
      v-for="(nav, index) in navigations"
      :key="index"
      :href="nav.link"
      theme="nav"
    >
      {{ nav.name }}
    </the-button>
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