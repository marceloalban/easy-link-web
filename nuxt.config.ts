// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  app: {
    baseURL: '/easy-link-web',
    buildAssetsDir: 'assets', 
    head: {
      bodyAttrs: {
        class: 'bg-green-200',
      },
    },
  }
})