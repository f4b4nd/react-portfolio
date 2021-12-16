import React from 'react';
import { useSelector } from 'react-redux'
import './styles/App.scss'
import { Contact, Hero, Navigation, Projects, Skills } from './components'
import { GlobalStyle } from './styles/globalStyle.js'


export default function App () {

    const isDarkMode = useSelector((state) => state.isDarkMode.value)

    return (
        <>
        <GlobalStyle isDarkMode={isDarkMode} />
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

