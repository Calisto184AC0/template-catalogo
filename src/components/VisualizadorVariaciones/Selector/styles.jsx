import styled from 'styled-components'

const StyledSelector = styled.div`
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

export default StyledSelector
