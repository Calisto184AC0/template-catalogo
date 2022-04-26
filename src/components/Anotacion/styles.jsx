import styled from 'styled-components'
import {
    DISTANCES,
    GRID,
    TABLET_SIZE,
    TextSmall,
} from '../../global/GlobalStyles'

const StyledAnotacion = styled.div`
    grid-column: 3 / span 2;
    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 2 / -1 !important;
    }

    display: flex;
    align-items: flex-end;

    position: relative;
    padding-bottom: 1rem;

    ${TextSmall}

    img {
        position: absolute;
        right: calc(100% + ${GRID.columnGap});

        min-width: 25px;
        width: auto;
        max-height: calc(2 * ${DISTANCES.small});
    }
`

export default StyledAnotacion
