import useListaContenidos from '../../hooks/useListaContenidos'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContext'
import inglesLista from '../../utils/en/listaContenidos.json'
import ElementoLista from './ElementoLista'

const ListaContenidos = ({ en = false, isMenuDesplegable = false }) => {
    const contendiosJSON = useContext(ListaContenidosContext)
    const contenidos = en
        ? useListaContenidos(inglesLista)
        : useListaContenidos(contendiosJSON)

    return (
        <StyledListaContenidos isMenuDesplegable={isMenuDesplegable}>
            <ul>
                {isMenuDesplegable && (
                    <ElementoLista
                        link='#indice'
                        title={en ? 'Index' : 'Inicio'}
                    />
                )}
                {contenidos}
            </ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidos
