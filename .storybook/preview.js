import { ThemeProvider } from '../src'

import './general.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const withProviders = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

export const decorators = [withProviders]
