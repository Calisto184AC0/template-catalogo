import styled, { css } from 'styled-components'
import StyledAnotacion from '../../../components/Anotacion/styles'
import StyledImageWithCaption from '../../../components/ImageWithCaption/styles'
import Seccion from '../../../components/Seccion'
import Text from '../../../components/Text'
import { Titulo } from '../../../components/Titulos'
import {
    COLORS,
    Column6,
    Column8,
    DISTANCES,
    GridLayout,
    TABLET_SIZE,
} from '../../../global/GlobalStyles'
import { mediaQueryTablet } from '../../../styles/sizes'

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

    .ejemplo-container {
        grid-row: 1;
        ${Column8}

        display: flex;
        flex-basis: min-content;
        gap: ${DISTANCES.small};

        margin-right: clamp(
            -${DISTANCES.medium},
            -2.604vw,
            -${DISTANCES.small}
        );
        overflow-x: auto;

        ${StyledImageWithCaption} {
            flex-basis: min-content;

            img {
                width: auto;
                height: clamp(500px, 46.875vw, 900px);
            }
        }

        ::-webkit-scrollbar {
            width: 7px;
            height: 7px;
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 7px;
            background: ${COLORS.gray04};
        }
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
            grid-template-columns: repeat(3, 1fr);
        `)}
    }

    .acabado-container {
        grid-row: 5;
        ${Column8}

        ${GridLayout}
        grid-template-columns: repeat(8, 1fr);

        ${mediaQueryTablet(css`
            grid-template-columns: repeat(3, 1fr);
        `)}
    }

    ${StyledAnotacion} {
        padding-bottom: calc(1.563rem + 25px);
    }

    ${StyledAnotacion}.anotacion-ejemplo {
        grid-row: 1;
    }
    ${StyledAnotacion}.anotacion-muestra {
        grid-row: 3;
    }
`

export default StyledSerie
