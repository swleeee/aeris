import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from '@emotion/react'
import { themes } from '@storybook/theming'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: themes.light,
      dark: themes.dark,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
]
