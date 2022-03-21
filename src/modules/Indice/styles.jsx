import styled from 'styled-components'
import Seccion from '../../components/Seccion'
import StyledListaContenidos from './ListaContenidos/styles'

const StyledIndice = styled(Seccion)`
    min-height: 100vh;

    ${StyledListaContenidos} {
        grid-column: 5 / span 6;
    }
`

export default StyledIndice
