import styled from 'styled-components'
import Seccion from '../../../components/Seccion'
import StyledCita from '../../../components/Cita/styles'
import {
    fadeLogoDelay,
    fadeLogoDuration,
    showCitaDelay,
    showCitaDuration,
    showLogoDelay,
    showLogoDuration,
} from './animationsConfig'
import { Column5 } from '../../../global/GlobalStyles'
import Logo from '../../../components/Logo'

const StyledIntroduccion = styled(Seccion)`
    min-height: 100vh;
    align-items: center;

    ${Logo},
    ${StyledCita} {
        opacity: 0;
        ${Column5}
        grid-row: 1;
    }

    ${Logo} {
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
            transform: translateY(230px);
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
            transform: translateY(-230px);
            opacity: 0;
        }
    }

    @keyframes showCita {
        from {
            transform: translateY(230px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export default StyledIntroduccion
