import styled from 'styled-components'


export const SwitchButton = ({children, widthPx='50', heightPx='25', setSwitcher, isActive, ...restProps}) => {

    return (
        <StyledSwitchButton 
            className={"btn-switch" + (isActive ? ' btn-switch-active': '')}
            width={widthPx}
            height={heightPx}
            onClick={() => setSwitcher()}
        >

            <div className="btn-background"></div>
            <div className="btn-circle"></div>
        </StyledSwitchButton>
    )
}

const StyledSwitchButton = styled.div`

    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    padding: 1em;

    .btn-background, .btn-circle {
        border-radius: 34px;
        height: 100%;
    }

    .btn-background {
        width: 100%;
        background-color: #2196f3;
        z-index: 2;
    }

    .btn-circle {
        width: 50%;
        background-color: white;
        box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.2);
        border: 0.1px solid lightgray;
        z-index: 3;
    }

    &:not(.btn-switch-active) {

        & > .btn-circle {
            transform: translateX(${({width}) => parseFloat(width) / 2 }px) translateY(${({height}) => -parseFloat(height) - 1}px);
            transition: transform 0.4s ease-in-out;
        }

        & > .btn-background {
            background-color: #e5e7eb;
            transition: background-color 0.5s;
        }

    }

    &.btn-switch-active {

        & > .btn-circle {
            transform: translateY(${({height}) => -parseFloat(height) - 1}px);
            transition: transform 0.4s;
        }

        & > .btn-background {
            background-color: #2196f3;
            transition: background-color 0.5s;
        }

    }

    &:hover {
        background-color: #f5f5f4;
        cursor: pointer;
    }


`