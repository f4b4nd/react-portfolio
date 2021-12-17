import styled from 'styled-components'
import { getThemeColor } from '../../styles/themes'
import { useSelector } from 'react-redux'

export const NavigationButton = ({children, ...restProps}) => {

    return (
        <StyledNavigationButton className="btn-navigation" >
            <a {...restProps}>
                {children}
            </a>
        </StyledNavigationButton>
    )
}
//#f5f5f4
const StyledNavigationButton = styled.span`

    font-size: 25px;
    font-weight: 100;
    padding: 0.5em;

    a, a:visited { 
        text-decoration: none;
    }

`