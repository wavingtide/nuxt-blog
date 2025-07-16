import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxthub/core',
  ],

  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      link: [
        // Basic favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        
        // Standard sizes
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        
        // Apple devices
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Android devices  
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/web-app-manifest-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/web-app-manifest-512x512.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        // Theme colors for mobile browsers
        { name: 'theme-color', content: '#11112e' },
        { name: 'msapplication-TileColor', content: '#11112e' }
      ]
    },
  },
})