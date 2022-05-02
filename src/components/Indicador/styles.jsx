import styled, { css } from 'styled-components'
import openIndicador from '../../assets/icons/open-indicator.svg'

const StyledIndicador = styled.img.attrs({
    src: openIndicador,
})`
    width: clamp(1.25rem, 1.302vw, 1.563rem);
    position: absolute;
    top: ${props => props.position.Y || '0px'};
    left: ${props => props.position.X || '0px'};
    cursor: pointer;

    transition: all 0.2s linear;

    ${props =>
        props.close
            ? css`
                  transform: rotate(-45deg);
              `
            : null}

    :hover {
        transform: rotate(-45deg);
    }
`

export default StyledIndicador
