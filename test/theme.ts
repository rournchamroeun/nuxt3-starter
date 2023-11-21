const color = {
  primary: '#1b5875',
  secondary: '#0284c7',
  error: '#dc2626',
  info: '#38bdf8',
  success: '#16a34a',
  warning: '#d97706',
}
export const theme = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        primary: color.primary,
        secondary: color.secondary,
        error: color.error,
        info: color.info,
        success: color.success,
        warning: color.warning,
      },
    },
    dark: {
      dark: true,
    },
  },
}