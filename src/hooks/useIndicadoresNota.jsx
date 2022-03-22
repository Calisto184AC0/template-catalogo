/* eslint-disable react/jsx-key */
import { Children, useRef } from 'react'
import Indicador from '../components/Indicador'

const useIndicadores = indicadores => {
    const containerRef = useRef()
    const textRef = useRef()

    const showContainer = text => {
        containerRef.current.style.opacity = 0.7
        textRef.current.innerHTML = text
        textRef.current.getAnimations()[0].play()
    }

    const hideContainer = () => {
        containerRef.current.style.opacity = 0
    }

    const listaIndicadores = Children.toArray(
        indicadores.map(indicador => {
            return (
                <Indicador
                    top={indicador.top}
                    left={indicador.left}
                    onMouseEnter={() => showContainer(indicador.text)}
                    onMouseLeave={hideContainer}
                />
            )
        })
    )

    return {
        listaIndicadores,
        containerRef,
        textRef,
    }
}

export default useIndicadores
