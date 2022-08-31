import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global'

const theme: DefaultTheme = {
  colors: {
    primary: '#007bff',
    primaryHover: '#0064cf',
    secondary: '#6c757d',
    secondaryHover: '#5e6164',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40'
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp