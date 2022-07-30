import styled, { css } from 'styled-components'
import Anotaciones from '../../../../components/Anotacion/Anotaciones'
import StyledAnotacion from '../../../../components/Anotacion/styles'
import Seccion from '../../../../components/Seccion'
import Text from '../../../../components/Text'
import { Titulo } from '../../../../components/Titulos'
import {
    Column6,
    Column8,
    DISTANCES,
    GridLayout,
    TABLET_SIZE,
} from '../../../../global/GlobalStyles'
import { mediaQueryMobile, mediaQueryTablet } from '../../../../styles/sizes'
import AmbienteContainer from '../../../../ui-components/AmbienteContainer'

const StyledSerie = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    @media (max-width: ${TABLET_SIZE}) {
        > * {
            grid-row: auto !important;
        }
    }

    ${Titulo} {
        grid-row: 1;
    }

    > ${Text} {
        ${Column6}
    }

    > ${Text}.text-descripcion {
        grid-row: 2;
    }

    > ${Text}.text-acabados {
        grid-row: 4;
    }

    ${AmbienteContainer} {
        grid-row: 1;
    }

    .muestra-container {
        grid-row: 3;
        ${Column8}

        ${GridLayout}
        row-gap: ${DISTANCES.small};
        grid-template-columns: repeat(4, 1fr);

        img {
            cursor: pointer;
        }

        ${mediaQueryTablet(css`
            grid-template-columns: repeat(4, 1fr);
        `)}

        ${mediaQueryMobile(css`
            grid-template-columns: repeat(2, 1fr);
        `)}
    }

    .acabado-container {
        grid-row: 5;
        ${Column8}

        ${GridLayout}
        grid-template-columns: repeat(8, 1fr);

        ${mediaQueryTablet(css`
            grid-template-columns: repeat(4, 1fr);
        `)}
        ${mediaQueryMobile(css`
            grid-template-columns: repeat(3, 1fr);
        `)}
    }

    > ${StyledAnotacion} {
        padding-bottom: calc(1.563rem + 25px);
    }

    > ${StyledAnotacion}.anotacion-ejemplo {
        grid-row: 1;
    }
    > ${StyledAnotacion}.anotacion-muestra {
        grid-row: 3;
    }

    > ${StyledAnotacion}.anotacion-variaciones,
        ${Anotaciones}.anotacion-variaciones {
        grid-row: 4;
    }
`

export default StyledSerie
