import styled from 'styled-components'

export const ButtonHamburger = function ({minWidth, menuIsActive, setMenuIsActive}) {
    return (
        <StyledButtonHamburger 
            onClick={() => setMenuIsActive(!menuIsActive)}
            className={"btn-hamburger" + (menuIsActive ? " menu-active" : "")}
            minWidth={minWidth} 
        >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </StyledButtonHamburger>       
    )
}

const StyledButtonHamburger = styled.div`

    @media screen and (min-width: ${props => props.minWidth}) {
        display: none;
    }

    position: absolute;
    top: 10px;
    right: 5%;
    align-self: flex-end;
    display: block;
    cursor: pointer;
  
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
    
    &.menu-active {

        .bar1 {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
            transform: rotate(-45deg) translate(-9px, 6px) ;
        }

        .bar2 {
            opacity: 0;
        }

        .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
            transform: rotate(45deg) translate(-8px, -8px) ;
        }

    }
`
