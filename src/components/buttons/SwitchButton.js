import styled from 'styled-components'

export const SwitchButton = ({children, ...restProps}) => (
    <StyledSwitchButton>
        <a>
        {children}
        </a>
    </StyledSwitchButton>
)

const StyledSwitchButton = styled.span`
    font-size: 25px;
    font-weight: 100;
    padding: 0.5em;

    &:hover {
        background-color: #f5f5f4;
    }
`