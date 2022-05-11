import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  css: ["@/assets/css/style.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
})
