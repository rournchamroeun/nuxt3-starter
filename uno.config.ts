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
      primary: '#03DAC6',
      primaryTest: '#1b5875',
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
