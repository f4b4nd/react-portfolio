import React from 'react';
import './App.scss';
import { Contact, Hero, Navigation, Projects, Skills } from './components'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
