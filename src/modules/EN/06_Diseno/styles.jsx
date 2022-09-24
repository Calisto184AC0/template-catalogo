/* eslint-disable indent */
import styled from 'styled-components'
import Seccion from '../../../components/Seccion'
import StyledVisualizadorRotador from '../../../components/VisualizadorRotador/styles'
import StyledVisualizadorVariaciones from '../../../components/VisualizadorVariaciones/styles'
import {
    COLORS,
    DISTANCES,
    GridLayout,
    TABLET_SIZE,
} from '../../../global/GlobalStyles'
import { column_5_span7 } from '../../../styles/grid'

const StyledDisenos = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    .espesores-ejemplos {
        ${column_5_span7}

        ${GridLayout}
        grid-template-columns: repeat(7, 1fr);

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
                word-break: break-word;
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

        ${props =>
            props.isEspesores ? 'grid-template-columns: repeat(3, 1fr);' : null}

        .espesor-1 {
            grid-column: 1 / span 1;
        }

        .espesor-2 {
            grid-column: 2 / span 1;
        }

        .espesor-3 {
            grid-column: 3 / span 1;
        }
    }

    ${StyledVisualizadorVariaciones}, ${StyledVisualizadorRotador} {
        align-self: flex-end;
    }
`

export default StyledDisenos
