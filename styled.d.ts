import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryHover: string,
      secondary: string,
      secondaryHover: string,
      success: string,
      danger: string,
      warning: string,
      info: string,
      light: string,
      dark: string
    }
  }
}