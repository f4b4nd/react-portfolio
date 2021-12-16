import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({isDarkMode}) => isDarkMode ? 'black' : 'white'};
    }
`