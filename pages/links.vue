<template>
  <div class="module-page">
    <div class="container">
      <h2 class="text-4xl">Page links:-</h2>
      <div class="page-link">
        <a href="/"> Home </a>
        <a href="/crm"> CRM </a>
        <a href="/store"> Store </a>
        <a href="/polls"> Polls </a>
        <a href="/whatsapp-link-generator"> Whatsapp Link Generator </a>
        <a href="/aboutus"> About Us </a>
        <a href="/pricing"> Pricing </a>
        <a href="/download"> Download </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.module-page {
  @apply py-20;
}
.page-link {
  @apply lg:flex;
  a {
    @apply inline-flex p-4 text-base text-black hover:text-primary-500;
    & + a {
      @apply mt-4 lg:mt-0 lg:ml-4;
    }
  }
}
</style>