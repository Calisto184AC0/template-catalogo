import styled from 'styled-components'
import StyledAnotacion from './styles'
import {
    DISTANCES,
    GRID,
    TABLET_SIZE,
    TextSmall,
} from '../../global/GlobalStyles'

const Anotaciones = styled.div`
    grid-column: 3 / span 2;
    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 2 / -1 !important;
        gap: 2rem;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-bottom: 1rem;

    ${StyledAnotacion} {
        padding-bottom: 0;
        flex: 1 1 $img-height;
    }
`

export default Anotaciones
