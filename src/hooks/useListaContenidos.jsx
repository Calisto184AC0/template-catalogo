import { useRef } from 'react'
import ElementoLista from '../modules/Indice/ListaContenidos/ElementoLista'
import Sublista from '../modules/Indice/ListaContenidos/Sublista'

const useListaContenidos = (elementosJSON, parentRefs = []) => {
    let elementos = []

    elementosJSON.map(elemento => {
        if (elemento.subList === undefined) {
            elementos.push(
                <ElementoLista
                    link={elemento.link}
                    title={elemento.title}
                    key={elemento.title}
                />
            )
        } else {
            const sublistaRef = useRef()
            const sublistaContenidos = useListaContenidos(elemento.subList, [
                ...parentRefs,
                sublistaRef,
            ])
            elementos.push(
                <Sublista
                    title={elemento.title}
                    key={elemento.title}
                    ref={sublistaRef}
                    parents={parentRefs}
                >
                    {sublistaContenidos}
                </Sublista>
            )
        }
    })

    return elementos
}

export default useListaContenidos
