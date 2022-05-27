/* eslint-disable react/jsx-key */
import { useCallback, useState, Children, useRef } from 'react'
import Indicador from '../components/Indicador'

const useIndicadoresNota = indicadores => {
    const [title, setTitle] = useState('')
    const [piezaImgSrc, setPiezaImgSrc] = useState('')

    const containerRef = useRef()
    const textRef = useRef()

    const showContainer = (title, imgSrc) => {
        containerRef.current.style.visibility = 'visible'
        containerRef.current.style.opacity = 1
        setPiezaImgSrc(imgSrc)
        setTitle(title)
        containerRef.current.children[0].getAnimations()[0]?.play()
        containerRef.current.children[1].getAnimations()[0]?.play()
    }

    const hideContainer = () => {
        containerRef.current.style.opacity = 0
        containerRef.current.style.visibility = 'hidden'
    }

    const listaIndicadores = Children.toArray(
        indicadores.map(indicador => {
            return (
                <Indicador
                    top={indicador.top}
                    left={indicador.left}
                    onMouseEnter={() =>
                        showContainer(
                            indicador.content.title,
                            indicador.content.imgSrc
                        )
                    }
                    onMouseLeave={hideContainer}
                />
            )
        })
    )

    return {
        title,
        listaIndicadores,
        containerRef,
        textRef,
        piezaImgSrc,
    }
}

export default useIndicadoresNota
