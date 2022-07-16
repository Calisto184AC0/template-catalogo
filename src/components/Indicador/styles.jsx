import styled, { css } from 'styled-components'
import openIndicador from '../../assets/icons/open-indicator.svg'

const StyledIndicador = styled.img.attrs({
    src: openIndicador,
})`
    width: clamp(1.25rem, 1.302vw, 1.563rem);
    position: absolute;
    top: ${props => props.position.Y};
    left: ${props => props.position.X || '0px'};
    bottom: ${props => props.position.Bottom};
    cursor: pointer;

    transition: all 0.2s linear;

    ${({ isHidden }) =>
        isHidden &&
        css`
            opacity: 0;
            visibility: hidden;
            transform: translateY(50px);
        `}

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
