import useListaContenidos from '../../hooks/useListaContenidos'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContext'
import inglesLista from '../../utils/en/listaContenidos.json'

const ListaContenidos = ({ en = false }) => {
    const contendiosJSON = useContext(ListaContenidosContext)
    const contenidos = en
        ? useListaContenidos(inglesLista)
        : useListaContenidos(contendiosJSON)

    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidos
