import styled from 'styled-components'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import { DISTANCES, GridLayout } from '../../global/GlobalStyles'
import StyledAnotacion from '../../components/Anotacion/styles'
import StyledVisualizadorNota from '../../components/VisualizadorNota/styles'

const StyledDolcker = styled(Seccion)`
    row-gap: ${DISTANCES.long};

    .dolcker-info {
        grid-column: 5 / span 7;
        grid-row: 1;

        ${GridLayout}
        grid-template-columns: repeat(7, 1fr);
        row-gap: ${DISTANCES.medium};

        ${StyledImageWithCaption}:nth-of-type(1) {
            grid-column: 1 / span 3;
        }

        ${StyledImageWithCaption}:nth-of-type(2) {
            grid-column: 4 / span 4;
        }

        > p {
            grid-column: 1 / span 6;
        }
    }

    ${StyledAnotacion} {
        grid-column: 3 / span 2;
        grid-row-start: 2;
    }

    ${StyledVisualizadorNota} {
        grid-column: 5 / span 8;
        grid-row-start: 2;
    }
`

export default StyledDolcker
