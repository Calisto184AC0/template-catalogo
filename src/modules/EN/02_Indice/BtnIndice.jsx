import styled, { css } from 'styled-components'
import { DISTANCES, GRID } from '../../../global/GlobalStyles'
import { mediaQueryTablet } from '../../../styles/sizes'

const BtnIndice = styled.img`
    position: fixed;
    top: ${GRID.verticalSpace};
    right: ${GRID.horizontalSpace};
    z-index: 4;
    width: 3rem;
    cursor: pointer;
    visibility: hidden;

    opacity: 0;
    transform: translateY(-10vh);
    transition: all 0.5s ease-out;
    mix-blend-mode: difference;

    ${mediaQueryTablet(css`
        top: ${DISTANCES.small};
    `)}
`

export default BtnIndice
