import styled from 'styled-components'
import Seccion from '../../components/Seccion'
import StyledCita from '../../components/Cita/styles'
import {
    fadeLogoDelay,
    fadeLogoDuration,
    showCitaDelay,
    showCitaDuration,
    showLogoDelay,
    showLogoDuration,
} from './animationsConfig'

const StyledIntroduccion = styled(Seccion)`
    min-height: 100vh;
    align-items: center;

    img,
    ${StyledCita} {
        opacity: 0;
        grid-column: 5 / span 6;
        grid-row: 1;
    }

    img {
        width: 219px;
        animation: showLogo ${showLogoDuration}s ease-out ${showLogoDelay}s 1
                normal forwards,
            fadeLogo ${fadeLogoDuration}s linear ${fadeLogoDelay}s 1 normal
                forwards;
    }

    ${StyledCita} {
        animation: showCita ${showCitaDuration}s linear ${showCitaDelay}s 1
            normal forwards;
    }

    @keyframes showLogo {
        from {
            transform: translateY(200px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeLogo {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-200px);
            opacity: 0;
        }
    }

    @keyframes showCita {
        from {
            transform: translateY(200px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export default StyledIntroduccion
