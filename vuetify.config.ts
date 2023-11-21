import {defineVuetifyConfiguration} from "vuetify-nuxt-module/custom-configuration";
// import {color} from "~/test/theme";
// import {color} from "~/utils/theme";
// console.log('color', color)

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1b5875',
        },
      },
      dark: {
        dark: true,
      },
    },
  }
})
