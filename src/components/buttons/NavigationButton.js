import styled from 'styled-components'

export const NavigationButton = ({children, ...restProps}) => (
    <StyledNavigationButton className="btn-navigation">
        <a {...restProps}>
            {children}
        </a>
    </StyledNavigationButton>
)

const StyledNavigationButton = styled.span`

    font-size: 25px;
    font-weight: 100;
    padding: 0.5em;

    &:hover {
        background-color: #f5f5f4;
    }

    a, a:visited { 
        text-decoration: none;
        color: black;
    }

`