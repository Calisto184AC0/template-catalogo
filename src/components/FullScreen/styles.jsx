import styled from 'styled-components'
import { GRID } from '../../global/GlobalStyles'

const StyledFullScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    animation: slide-down 1s ease-in-out 0s 1;

    @keyframes slide-down {
        0% {
            transform: translateY(-100vh);
        }

        100% {
            transform: translateY(0vh);
        }
    }

    .muestraFondo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .closeFullScreen {
        width: 3rem;
        position: absolute;
        top: ${GRID.verticalSpace};
        right: ${GRID.horizontalSpace};
        cursor: pointer;
    }
`

export default StyledFullScreen
