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

    .projects-cards {
        box-shadow: 0 20px 30px -10px ${({theme}) => getThemeColor('projects-box-shadow', theme)};
    }

    .card {
        background-color: white;

        &:hover {
            box-shadow: 0 20px 30px -10px ${({theme}) => getThemeColor('card-box-shadow', theme)};
        }
    }

`