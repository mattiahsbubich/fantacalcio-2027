import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const repositoryName = 'fantacalcio-27';

export default defineConfig({
  base: `/${repositoryName}/`,

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon-32x32.png',
        'apple-touch-icon.png'
      ],

      manifest: {
        name: 'Fantacalcio 2026/27',

        short_name: 'Fantacalcio',

        description:
          'Assistente personale offline per il fantacalcio 2026/27.',

        theme_color: '#060810',

        background_color: '#060810',

        display: 'standalone',

        orientation:
          'portrait-primary',

        start_url:
          `/${repositoryName}/`,

        scope:
          `/${repositoryName}/`,

        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },

          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },

          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      workbox: {
        navigateFallback:
          'index.html',

        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webmanifest}'
        ]
      }
    })
  ]
});