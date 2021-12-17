import { createSlice } from '@reduxjs/toolkit'

export const darkThemeSlice = createSlice({
    name: 'globalTheme',
    initialState: {
        value: 'default',
    },
    reducers: {
        switchTheme: (state) => { state.value = (state.value === 'default' ? 'dark' : 'default' )},
    },
})


export const { switchTheme } = darkThemeSlice.actions

export default darkThemeSlice.reducer