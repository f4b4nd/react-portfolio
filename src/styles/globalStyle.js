import { createGlobalStyle } from 'styled-components'
import { getThemeColor } from './themes'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({theme}) => getThemeColor('background', theme)};
    }

    h1, h2, h3, h4 {
        color: ${({theme}) => getThemeColor('black', theme)};
    }


    .btn-navigation {
        color: ${({theme}) => getThemeColor('black', theme)};
        background-color: ${({theme}) => getThemeColor('background', theme)};

        &:hover {
            background-color: ${({theme}) => getThemeColor('200', theme)};
        }

        a, a:visited {
            color: ${({theme}) => getThemeColor('black', theme)};
        }
    }

    .btn-toggle {
        &:hover {
            background-color: ${({theme}) => getThemeColor('200', theme)};
        }
    }


`