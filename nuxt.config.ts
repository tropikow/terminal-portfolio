// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [    
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.png' }        
      ],
      title: 'Tropikode - Home',
    }
  },
  modules: ['@nuxt/icon', '@nuxt/image','@nuxtjs/tailwindcss'],  
})