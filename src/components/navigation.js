import { useState } from "react"
import { HamburgerButton } from "./buttons/HamburgerButton"
import { NavigationButton } from "./buttons/NavigationButton"
import { SwitchButton } from "./buttons/SwitchButton"

export default function Navigation () {

    const [menuIsActive, setMenuIsActive] = useState(false)

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
                    <SwitchButton />
                </div>
            </div>
            <HamburgerButton 
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
           
        </div>
    )
}