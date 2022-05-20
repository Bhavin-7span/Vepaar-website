<template>
  <section class="module module--support lg:h-screen">
    <div class="container block lg:flex items-center h-full">
      <div class="lg:flex w-full items-center">
        <div class="max-w-xs lg:max-w-sm">
          <h2
            class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900"
          >
            Vepaar <br />
            Provides
            <span
              class="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-primary-500
                via-purple-500 via-deep-purple-500
                to-pink-500
                block
              "
              >Live Support.</span
            >
          </h2>
        </div>
        <div class="mt-10 lg:mt-0 flex-1 lg:pl-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SupportCard
              v-for="(support, index) in supports"
              :key="index"
              :support="support"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      supports: [
        {
          title: "Facebook <span>Community Group</span>",
          icon: "facebook.svg"
        },
        {
          title: "Chat with us on <span>WhatsApp</span>",
          icon: "whatsapp.svg"
        },
        {
          title: "Schedule a <span>Demo</span>",
          icon: "demo.svg"
        },
        {
          title: "Let's discuss on <span>Email</span>",
          icon: "email.svg"
        }
      ]
    };
  }
};
</script>
