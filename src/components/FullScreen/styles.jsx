import styled, { css } from 'styled-components'
import { DISTANCES, GRID, TextMedium } from '../../global/GlobalStyles'
import { mediaQueryTablet } from '../../styles/sizes'

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

    .slider {
        display: grid;
        grid-template-columns: auto auto auto;

        width: 100%;
        height: 100%;

        overflow-x: hidden;
        overflow-y: hidden;
        user-select: none;

        img {
            width: 100vw;
            height: 100vh;
            user-select: none;
            pointer-events: none;
        }
    }

    > span {
        ${TextMedium}
        position: absolute;
        top: ${GRID.verticalSpace};
        left: ${GRID.horizontalSpace};
        z-index: 2;
        //color: white;
        //mix-blend-mode: difference;
    }

    .controles {
        ${TextMedium}
        position: absolute;
        top: ${GRID.verticalSpace};
        left: 50%;
        z-index: 2;

        display: flex;
        align-items: flex-end;
        gap: 1rem;

        img {
            width: auto;
            height: 2rem;
            cursor: pointer;
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
        filter: brightness(0);
    }

    ${mediaQueryTablet(css`
        .closeFullScreen,
        > span {
            top: ${DISTANCES.small};
        }

        .closeFullScreen {
            right: clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium});
        }

        > span {
            left: clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium});
        }
    `)}
`

export default StyledFullScreen
