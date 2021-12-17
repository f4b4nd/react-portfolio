import React from 'react';
import { useSelector } from 'react-redux'
import './styles/App.scss'
import { Contact, Hero, Navigation, Projects, Skills } from './components'
import { GlobalStyle } from './styles/globalStyle.js'


export default function App () {

    const globalTheme = useSelector((state) => state.globalTheme.value)

    return (
        <>
        <GlobalStyle theme={globalTheme} />
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

