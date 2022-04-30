import styled from 'styled-components'
import { GRID } from '../../global/GlobalStyles'

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
`

export default BtnIndice
