import styled from 'styled-components'

const StyledIndicador = styled.img`
    width: 1.563rem;
    position: absolute;
    top: ${props => props.position.Y || '0px'};
    left: ${props => props.position.X || '0px'};
    cursor: pointer;

    transition: all 0.2s linear;

    :hover {
        transform: rotate(-45deg);
    }
`

export default StyledIndicador
