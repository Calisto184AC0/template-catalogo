import { useRef } from 'react'
import ElementoLista from '../components/ListaContenidos/ElementoLista'
import Sublista from '../components/ListaContenidos/Sublista'

const useListaContenidos = (
    elementosJSON,
    parentRefs = [],
    isReactRouter = false
) => {
    let elementos = []

    elementosJSON.map(elemento => {
        if (elemento.subList === undefined) {
            console.log(elemento.title, elemento.target)
            elementos.push(
                <ElementoLista
                    link={elemento.link}
                    title={elemento.title}
                    key={elemento.title}
                    isReactRouter={isReactRouter}
                    target={elemento.target}
                />
            )
        } else {
            const sublistaRef = useRef()
            const sublistaContenidos = useListaContenidos(
                elemento.subList,
                [...parentRefs, sublistaRef],
                isReactRouter
            )
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
