<template>
  <div
    class="
      flex-1
      rounded-xl
      border-4
      hover:border-primary-500 hover:bg-white
      bg-primary-500 bg-opacity-5
      p-5
      flex flex-col
      border-transparent
    "
  >
    <div class="flex items-center">
      <img src="/images/extension-purple.svg" alt="" />
      <h3 class="ml-3 text-2xl lg:text-4xl text-gray-900 font-semibold">
        Chrome Extension
      </h3>
    </div>
    <p class="my-5 text-gray-500">
      Vepaar has a Chrome Browser Extension which runs on top of WhatsApp Web.
      Visit
      <a
        href="https://web.whatsapp.com"
        target="_blank"
        class="text-primary-500"
        >web.whatsapp.com</a
      >
      to start using the Vepaar chrome extension right away.
    </p>
    <a
      href="https://chrome.google.com/webstore/detail/vepaar-crm-for-whatsapp/bkokmlhcdmoeobdcabifliikflimplol"
      class="mt-auto"
      target="_blank"
    >
      <img src="/images/chrome-web-store.svg" class="h-12 lg:h-16" alt="" />
    </a>
  </div>
</template>