import styled from 'styled-components'
import StyledAnotacion from './styles'
import {
    DISTANCES,
    GRID,
    TABLET_SIZE,
    TextSmall,
} from '../../global/GlobalStyles'
import { column_3_span2 } from '../../styles/grid'

const Anotaciones = styled.div`
    @media (max-width: ${TABLET_SIZE}) {
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
