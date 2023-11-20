import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@unocss/nuxt',
  ],
  css: ['~/assets/scss/index.scss'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vuetify: {
    moduleOptions: {
      includeTransformAssetsUrls: true,
      prefixComposables: true
    }
  }
})