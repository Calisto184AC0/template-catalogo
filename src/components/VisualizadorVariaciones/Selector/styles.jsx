import styled, { css } from 'styled-components'

const StylesSlector = css`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: flex-start;
    cursor: ${props => (props.noClick ? 'normal' : 'pointer')};

    img {
        opacity: ${props => (props.quitarFondo ? 0.2 : 1)};
        width: 7rem;
    }
`

const StyledSelectorLabel = styled.label`
    ${StylesSlector}

    input {
        display: none;
    }
`

const StyledSelector = styled.div`
    ${StylesSlector}
`

export default StyledSelector
export { StyledSelectorLabel }
