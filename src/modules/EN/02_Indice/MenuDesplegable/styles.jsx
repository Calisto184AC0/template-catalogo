import styled from 'styled-components'
import Seccion from '../../../../components/Seccion'

const StyledMenuDesplegable = styled(Seccion)`
    min-height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;

    max-height: 100vh;
    overflow-y: scroll;

    animation: slide-down 1s ease-in-out 0s 1;

    @keyframes slide-down {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0%);
        }
    }
`

export default StyledMenuDesplegable
