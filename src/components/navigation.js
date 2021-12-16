import { useState } from "react"
import { ButtonHamburger } from "./button-hamburger"


export default function Navigation () {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <div className="navigation">
            <div className="col">
                <div> Fabien A. </div>
            </div>
            <div className="col">
                <div className={'menu' + (menuIsActive ? " menu-active" : "")}>
                    <button> Skills </button>
                    <button> Projects </button>
                    <button> Contact me </button>
                    <button> Dark </button>
                </div>
            </div>
            <ButtonHamburger 
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
                minWidth={'601px'}
            />
           
        </div>
    )
}