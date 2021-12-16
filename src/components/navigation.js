import { useState } from "react"

import { HamburgerButton } from "./buttons/HamburgerButton"
import { NavigationButton } from "./buttons/NavigationButton"
import { SwitchButton } from "./buttons/SwitchButton"

import { useSelector, useDispatch } from 'react-redux'
import { switchDarkMode } from '../features/darkModeSlice'


export default function Navigation () {

    const [menuIsActive, setMenuIsActive] = useState(false)
    
    const isDarkMode = useSelector((state) => state.isDarkMode.value)
    const dispatch = useDispatch()


    return (
        <div className="navigation">
            <div className="col">
                <div className="logo-container"> 
                    <img src="/images/fabien-andria-logo.png" alt="fabien andria" />
                </div>
            </div>
            <div className="col">
                <div className={'menu' + (menuIsActive ? " menu-active" : "")}>
                    <NavigationButton href="#skills">Skills</NavigationButton>
                    <NavigationButton href="#projects">Projects</NavigationButton>
                    <NavigationButton href="#contact">Contact me</NavigationButton>
                    <SwitchButton 
                        setSwitcher={() => dispatch(switchDarkMode())} 
                        isActive={isDarkMode} 
                    />
                </div>
            </div>
            <HamburgerButton 
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
           
        </div>
    )
}