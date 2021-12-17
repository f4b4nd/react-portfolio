import { createSlice } from '@reduxjs/toolkit'

export const darkThemeSlice = createSlice({
    name: 'isDarkTheme',
    initialState: {
        value: false,
    },
    reducers: {
        switchDarkTheme: (state) => { state.value = !state.value },
    },
})


export const { switchDarkTheme } = darkThemeSlice.actions

export default darkThemeSlice.reducer