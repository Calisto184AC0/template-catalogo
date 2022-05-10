import styled from 'styled-components'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import {
    Column7,
    DISTANCES,
    GridLayout,
    TABLET_SIZE,
} from '../../global/GlobalStyles'
import StyledAnotacion from '../../components/Anotacion/styles'
import StyledVisualizadorNota from '../../components/VisualizadorNota/styles'

const StyledDolcker = styled(Seccion)`
    row-gap: ${DISTANCES.long};

    @media (max-width: ${TABLET_SIZE}) {
        .dolcker-info {
            grid-row-start: 2;
        }

        ${StyledAnotacion} {
            grid-row-start: 3 !important;
        }

        ${StyledVisualizadorNota} {
            grid-row-start: 4 !important;
        }
    }

    .dolcker-info {
        ${Column7}

        ${GridLayout}
        grid-template-columns: repeat(7, 1fr);
        row-gap: ${DISTANCES.medium};

        ${StyledImageWithCaption}:nth-of-type(1) {
            grid-column: 1 / span 6;
        }

        > p {
            grid-column: 1 / span 6;
        }
    }

    ${StyledAnotacion} {
        grid-row-start: 2;
    }

    ${StyledVisualizadorNota} {
        grid-row-start: 2;
    }
`

export default StyledDolcker
