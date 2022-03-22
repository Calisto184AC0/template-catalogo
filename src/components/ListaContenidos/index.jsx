import useListaContenidos from '../../hooks/useListaContenidos'
import StyledListaContenidos from './styles'
import { useContext } from 'react'
import ListaContenidosContext from '../../contexts/ListaContenidosContext'

const ListaContenidos = () => {
    const contendiosJSON = useContext(ListaContenidosContext)
    const contenidos = useListaContenidos(contendiosJSON)

    return (
        <StyledListaContenidos>
            <ul>{contenidos}</ul>
        </StyledListaContenidos>
    )
}

export default ListaContenidos
