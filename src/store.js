import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './features/darkModeSlice'

export default configureStore({
    reducer: {
        isDarkMode: darkThemeReducer
    }
})