import styled from 'styled-components'

const StyledIndicador = styled.img`
    width: clamp(1.25rem, 1.302vw, 1.563rem);
    position: absolute;
    top: ${props => props.position.Y};
    left: ${props => props.position.X || '0px'};
    bottom: ${props => props.position.Bottom};
    cursor: pointer;

    transition: all 0.2s linear;

    :hover {
        transform: rotate(-45deg);
    }
`

export default StyledIndicador
