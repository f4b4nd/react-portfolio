import { useState } from "react"

import { HamburgerButton } from "./buttons/HamburgerButton"
import { NavigationButton } from "./buttons/NavigationButton"
import { ToggleButton } from "./buttons/ToggleButton"

import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../features/darkThemeSlice'


export default function Navigation () {

    const [menuIsActive, setMenuIsActive] = useState(false)
    
    const globalTheme = useSelector(({globalTheme}) => globalTheme.value)
    const dispatch = useDispatch()


    return (
        <div className="navigation">
            <div className="col">
                <div className="logo-container"> 
                    <img src={`/images/fabien-andria-logo${globalTheme === 'dark' ? '-darktheme' : ''}.png`} alt="fabien andria" />
                </div>
            </div>
            <div className="col">
                <div className={'menu' + (menuIsActive ? " menu-active" : "")}>
                    <NavigationButton href="#skills">Skills</NavigationButton>
                    <NavigationButton href="#projects">Projects</NavigationButton>
                    <NavigationButton href="#contact">Contact me</NavigationButton>
                    <ToggleButton 
                        setToggle={() => dispatch(switchTheme())} 
                        isActive={globalTheme === 'default' ? false : true} 
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