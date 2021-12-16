import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'isDarkMode',
    initialState: {
        value: false,
    },
    reducers: {
        switchDarkMode: (state) => { state.value = !state.value },
    },
})

// Action creators are generated for each case reducer function
export const { switchDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer