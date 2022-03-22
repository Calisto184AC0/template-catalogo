import styled from 'styled-components'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import { DISTANCES, GRID, GridLayout } from '../../global/GlobalStyles'

const StyledIntroduccion = styled(Seccion)`
    row-gap: ${GRID.rowGap};

    ${StyledImageWithCaption} {
        grid-row: 2 / span 2;
    }

    ${StyledImageWithCaption}:nth-of-type(1) {
        grid-column: 1 / span 4;
    }

    ${StyledImageWithCaption}:nth-of-type(2) {
        grid-column: 5 / span 4;
    }

    > div {
        grid-row: 2;
        grid-column: 9 / span 4;

        ${GridLayout}
        grid-template-columns: repeat(4, 1fr);
        row-gap: ${DISTANCES.small};

        > img:nth-of-type(1) {
            grid-column: 3 / span 2;
            grid-row: 1;
        }

        > img:nth-of-type(2) {
            grid-column: 1 / span 2;
            grid-row: 2;
        }

        > img:nth-of-type(3) {
            grid-column: 3 / span 2;
            grid-row: 2;
        }
    }
`

export default StyledIntroduccion
