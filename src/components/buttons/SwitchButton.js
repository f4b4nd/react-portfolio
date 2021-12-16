import { useState } from 'react'

import styled from 'styled-components'



export const SwitchButton = ({children, widthPx='50', heightPx='25', ...restProps}) => {

    const [isActive, setIsActive] = useState(true)

    return (
        <StyledSwitchButton 
            className={"btn-switch" + (isActive ? ' btn-switch-active': '')}
            width={widthPx}
            height={heightPx}
            onClick={() => setIsActive(!isActive)}
        >

            <div className="bg"></div>
            <div className="circle"></div>
        </StyledSwitchButton>
    )
}

const StyledSwitchButton = styled.div`

    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    padding: 1em;

    .bg, .circle {
        border-radius: 34px;
        height: 100%;
    }

    .bg {
        width: 100%;
        background-color: #2196f3;
        z-index: 2;
    }

    .circle {
        width: 50%;
        transform: translateY(${({height}) => (parseFloat(height) * (-1)) -1}px);
        background-color: white;
        box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.2);
        border: 0.1px solid lightgray;
        z-index: 3;

    }

    &:not(.btn-switch-active) {

        & > .circle {
            transform: translateX(${({width}) => parseFloat(width) / 2 }px) translateY(${({height}) => -1 + (parseFloat(height) * -1)}px);
            transition: transform 0.4s ease-in-out;
        }

        & > .bg {
            background-color: #e5e7eb;
            transition: background-color 0.5s;
        }

    }

    &.btn-switch-active {

        & > .circle {
            transform: translateY(${({height}) => -1 + (parseFloat(height) * -1)}px);
            transition: transform 0.4s;
        }

        & > .bg {
            background-color: #2196f3;
            transition: background-color 0.5s;
        }

    }

    &:hover {
        background-color: #f5f5f4;
        cursor: pointer;
    }


`