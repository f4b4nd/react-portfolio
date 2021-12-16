import { useState } from "react"
import { HamburgerButton } from "./buttons/HamburgerButton"
import { NavigationButton } from "./buttons/NavigationButton"
import { SwitchButton } from "./buttons/SwitchButton"

export default function Navigation () {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <div className="navigation">
            <div className="col">
                <div> Fabien A. </div>
            </div>
            <div className="col">
                <div className={'menu' + (menuIsActive ? " menu-active" : "")}>
                    <NavigationButton href="#skills">Skills</NavigationButton>
                    <NavigationButton href="#projects">Projects</NavigationButton>
                    <NavigationButton href="#contact">Contact me</NavigationButton>
                    <SwitchButton widthPx='50' heightPx='25'/>
                </div>
            </div>
            <HamburgerButton 
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
           
        </div>
    )
}