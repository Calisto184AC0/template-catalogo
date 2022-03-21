import { createContext } from 'react'
import listaContenidosJSON from '../utils/listaContenidos.json'

const ListaContenidosContext = createContext(listaContenidosJSON)

export default ListaContenidosContext
