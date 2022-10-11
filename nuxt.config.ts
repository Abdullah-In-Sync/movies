import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
//   hooks: {
//     'pages:extend'(pages) {
//         pages.push({
//             name: 'moviePage',
//             path: '/film',
//             file: resolve(__dirname, 'pages/langcode/movies.vue')
//         })
//     }
// }
})