import React from 'react';
import { useSelector } from 'react-redux'
import './styles/App.scss'
import { Contact, Hero, Navigation, Projects, Skills } from './components'
import { GlobalStyle } from './styles/globalStyle.js'


export default function App () {

    const isDarkTheme = useSelector((state) => state.isDarkTheme.value)

    return (
        <>
        <GlobalStyle isDarkTheme={isDarkTheme} />
        <div className="App">
            <Navigation />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
        </>
    )
}

