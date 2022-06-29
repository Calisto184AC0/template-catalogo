import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import StyledListaContenidos from '../components/ListaContenidos/styles'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import useListaContenidos from '../hooks/useListaContenidos'
import { StyledIndice } from '../modules/02_Indice/styles'
import Final from '../modules/10_Final'

const Main = () => {
    return (
        <>
            <StyledIndice backgroundColor={COLORS.gray08}>
                <Titulo color={COLORS.gray01}>DOLCKER</Titulo>
                <MenuLanzadera />
            </StyledIndice>
            <Final invert />
        </>
    )
}

export default Main
