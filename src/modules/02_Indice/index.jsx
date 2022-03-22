import ListaContenidos from '../../components/ListaContenidos'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import StyledIndice from './styles'

const Indice = () => {
    return (
        <StyledIndice backgroundColor={COLORS.gray08}>
            <Titulo color={COLORS.gray01}>Índice</Titulo>
            <ListaContenidos />
        </StyledIndice>
    )
}

export default Indice
