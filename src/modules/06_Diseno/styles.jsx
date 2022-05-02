import styled from 'styled-components'
import Anotaciones from '../../components/Anotacion/Anotaciones'
import StyledAnotacion from '../../components/Anotacion/styles'
import Seccion from '../../components/Seccion'
import StyledVisualizadorRotador from '../../components/VisualizadorRotador/styles'
import StyledVisualizadorVariaciones from '../../components/VisualizadorVariaciones/styles'
import {
    COLORS,
    Column7,
    DISTANCES,
    GridLayout,
    TABLET_SIZE,
} from '../../global/GlobalStyles'

const StyledDisenos = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    ${StyledAnotacion}, ${Anotaciones} {
        grid-column: 3 / span 2;
    }

    .espesores-ejemplos {
        ${Column7}

        ${GridLayout}
        grid-template-columns: repeat(7, 1fr);

        img {
            height: min-content;
        }

        img:nth-of-type(1) {
            grid-column: 1 / span 3;
        }
        img:nth-of-type(2) {
            grid-column: 4 / span 2;
        }
    }

    .espesor {
        grid-row: 2;

        ul {
            display: flex;
            flex-direction: column;

            strong {
                padding: ${DISTANCES.small} 0;
            }

            li {
                border-top: 1px solid ${COLORS.gray05};
                padding: ${DISTANCES.small} 0;
            }
        }
    }

    .espesor-1 {
        grid-column: 5 / span 2;
    }

    .espesor-2 {
        grid-column: 7 / span 2;
    }

    .espesor-3 {
        grid-column: 9 / span 2;
    }

    @media (max-width: ${TABLET_SIZE}) {
        > * {
            grid-row-start: auto !important;
        }

        .espesor-1 {
            grid-column: 1 / span 4;
        }

        .espesor-2 {
            grid-column: 5 / span 4;
        }

        .espesor-3 {
            grid-column: 9 / span 4;
        }
    }

    ${StyledVisualizadorVariaciones}, ${StyledVisualizadorRotador} {
        align-self: flex-end;
    }
`

export default StyledDisenos
