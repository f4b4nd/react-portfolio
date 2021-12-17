
const defaultColors = {
    primary: '#ED8936',
    black: '#000000',
    white: '#FFFFFF',
    '100': '#F7FAFC',
    '200': '#EDF2F7',
    '300': '#E2E8F0',
    '400': '#CBD5E0',
    '500': '#A0AEC0',
    '600': '#718096',
    '700': '#4A5568',
    '800': '#2D3748',
    '900': '#1A202C',
    'background': '#FFFFFF',
    'card-box-shadow': 'rgba(0, 0, 0, 0.2)',
    'projects-box-shadow': '#d9dbdf',
}

const darkColors = {
    primary: '#F6AD55',
    black: defaultColors.white,
    white: defaultColors.black,
    '100': defaultColors[900],
    '200': defaultColors[800],
    '300': defaultColors[700],
    '400': defaultColors[600],
    '500': defaultColors[500],
    '600': defaultColors[400],
    '700': defaultColors[300],
    '800': defaultColors[200],
    '900': defaultColors[100],
    'background': '#171c28',
    'card-box-shadow': '#d9dbdf',
    'projects-box-shadow': '#171c28',
}

const themes = {
    'default': {...defaultColors},
    'dark': {...darkColors},
}

  
export const getThemeColor = (color, globalTheme) => {
    const themeColor = themes[globalTheme][color]
    const fallbackColor = themes.default[color]
    return themeColor || fallbackColor
}