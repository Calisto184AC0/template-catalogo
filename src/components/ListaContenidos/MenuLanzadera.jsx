import useListaContenidos from '../../hooks/useListaContenidos'
import menuLanzadera from '../../utils/menuLanzadera'
import StyledListaContenidos from './styles'

const MenuLanzadera = () => {
    const contenidos = useListaContenidos(menuLanzadera, [], true)
    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default MenuLanzadera
