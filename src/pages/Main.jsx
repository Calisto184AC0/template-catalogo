import StyledListaContenidos from '../components/ListaContenidos/styles'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import useListaContenidos from '../hooks/useListaContenidos'
import { StyledIndice } from '../modules/02_Indice/styles'
import menuLanzadera from '../utils/menuLanzadera'

const Main = () => {
    const contenidos = useListaContenidos(menuLanzadera, [], true)
    return (
        <StyledIndice backgroundColor={COLORS.gray08}>
            <Titulo color={COLORS.gray01}>DOLCKER</Titulo>
            <StyledListaContenidos>
                <ul>{contenidos}</ul>
            </StyledListaContenidos>
        </StyledIndice>
    )
}

export default Main
