import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from '@emotion/react'
import { themes } from '@storybook/theming'
import '../reset.css'

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
