import useListaContenidos from '../../hooks/useListaContenidos'
import menuLanzaderaEn from '../../utils/en/menuLanzaderaEn'
import menuLanzadera from '../../utils/menuLanzadera'
import StyledListaContenidos from './styles'

const MenuLanzadera = ({ en = false }) => {
    const contenidos = en
        ? useListaContenidos(menuLanzaderaEn, [], true)
        : useListaContenidos(menuLanzadera, [], true)
    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default MenuLanzadera
