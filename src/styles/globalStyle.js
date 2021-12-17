import { createGlobalStyle } from 'styled-components'
import { getThemeColor } from './themes'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({isDarkTheme}) => getThemeColor('white', isDarkTheme)};
    }
`