import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  shortcuts: {
    'feature-icon': 'dark:bg-secondary-800',
  },
  presets: [
    presetUseful(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts(),
  ],
  theme: {
    colors: {
      primary: '#d77908',
      secondary: {
        '50': '#eff9ff',
        '100': '#dff3ff',
        '200': '#b7e8ff',
        '300': '#77d7ff',
        '400': '#2ec4ff',
        '500': '#03adf4',
        '600': '#008ad1',
        '700': '#006ea9',
        '800': '#015d8b',
        '900': '#074d73',
        '950': '#042940',
      },
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
