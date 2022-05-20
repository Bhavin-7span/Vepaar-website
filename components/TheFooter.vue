<template>
  <footer class="pt-10 sm:pt-20 bg-gray-900">
    <div class="container">
      <div class="lg:flex">
        <div class="lg:w-2/5">
          <div class="lg:max-w-xs">
            <nuxt-link to="/">
              <img
                src="/images/vepaar-logo-white.png"
                alt=""
                class="h-8 lg:h-10 max-w-none"
              />
            </nuxt-link>
            <p class="text-sm sm:text-base text-gray-500 mt-7">
              Vepaar has the right tools for you to create and run your business
              page, and seamlessly interact with your customers anytime,
              anywhere.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0 lg:flex-1">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <FooterLinks
              v-for="(flink, index) in footerLinks"
              :key="index"
              :flink="flink"
            />
            <SocialLinks class="col-span-2 sm:col-span-1" />
          </div>
        </div>
      </div>
      <div
        class="
          mt-8
          py-8
          text-center
          sm:text-left sm:flex
          justify-between
          border-t border-gray-500
        "
      >
        <p class="text-sm sm:text-base text-gray-400">
          © 7Span Internet Pvt Ltd. All rights reserved, 2022.
        </p>

        <div class="inline-flex items-center">
          <span class="text-sm sm:text-base text-gray-400 inline-block mr-2"
            >Made in</span
          >
          <img src="/images/india.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          title: "Products",
          links: [
            {
              name: "CRM",
              href: "/crm"
            },
            {
              name: "Store",
              href: "/store"
            },
            {
              name: "Polls",
              href: "/polls"
            },
            {
              name: "Link Generator",
              href: "#"
            }
          ]
        },
        {
          title: "Learn",
          links: [
            {
              name: "User Guide",
              href: "#"
            },
            {
              name: "Video Tutorials",
              href: "#"
            },
            {
              name: "Blog",
              href: "#"
            },
            {
              name: "FAQs",
              href: "#"
            }
          ]
        },
        {
          title: "Others",
          links: [
            {
              name: "Privacy Policy",
              href: "#"
            },
            {
              name: "Terms of Use",
              href: "#"
            }
          ]
        }
      ]
    };
  }
};
</script>