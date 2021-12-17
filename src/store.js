import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './features/darkThemeSlice'

export default configureStore({
    reducer: {
        isDarkTheme: darkThemeReducer
    }
})