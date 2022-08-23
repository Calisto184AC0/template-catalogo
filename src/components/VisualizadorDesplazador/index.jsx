import { useState, useEffect } from 'react'
import StyledVisualizadorDesplazador from './styles'
import acabados from '../../assets/images/Diseno/Acabados/acabados.webp'
import useConfigDesplazador from '../../hooks/useConfigDesplazador'
import Indicador from './Indicador'

const VisualizadorDesplazador = ({ config }) => {
    const {
        indicadores,
        fondoRef,
        actualDesplazadorImgs,
        actualDesplazadorTitulo,
        cleanDesplazador,
    } = useConfigDesplazador(config, acabados)

    const [isMouseDown, setIsMouseDown] = useState(false)
    const [initPos, setInitPos] = useState(0)
    const [indexDesplazador, setIndexDesplazador] = useState(0)

    const cacheImages = async srcArray => {
        const promises = await srcArray.map(src => {
            return new Promise((res, rej) => {
                const img = new Image()
                img.src = src
                img.onload = res()
                img.onerror = rej()
            })
        })

        await Promise.all(promises)
    }

    useEffect(() => {
        cacheImages(actualDesplazadorImgs)
    }, [actualDesplazadorImgs])

    const initDragMobile = ({ touches }) => {
        setIsMouseDown(() => {
            setInitPos(touches[0].clientX)
            return true
        })
    }

    const initDrag = ({ clientX }) => {
        setIsMouseDown(() => {
            setInitPos(clientX)
            return true
        })
    }

    const movement = posX => {
        if (isMouseDown) {
            if (posX - initPos > 30) {
                setIndexDesplazador(prevIndex => {
                    setInitPos(posX)
                    if (prevIndex === actualDesplazadorImgs.length - 1)
                        return prevIndex
                    else return prevIndex + 1
                })
            } else if (posX - initPos < -30) {
                setIndexDesplazador(prevIndex => {
                    setInitPos(posX)
                    if (prevIndex === 0) return prevIndex
                    else return prevIndex - 1
                })
            }
        }
    }

    const handleMouseMove = ({ clientX }) => {
        movement(clientX)
    }

    const handleTouchMove = ({ touches }) => {
        const posX = touches[0].clientX

        movement(posX)
    }

    if (actualDesplazadorImgs.length === 0) {
        return (
            <StyledVisualizadorDesplazador>
                <img src={acabados} alt='Diferentes acabados' />
                <div className='indicadores'>{indicadores}</div>
            </StyledVisualizadorDesplazador>
        )
    } else {
        return (
            <StyledVisualizadorDesplazador>
                <img
                    src={actualDesplazadorImgs[indexDesplazador]}
                    alt='Muestra de acabado'
                    ref={fondoRef}
                />
                <span>{actualDesplazadorTitulo}</span>
                <div
                    className='indicadores desplazador'
                    onMouseDown={initDrag}
                    onTouchStart={initDragMobile}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseUp={() => setIsMouseDown(false)}
                    onMouseLeave={() => setIsMouseDown(false)}
                    onTouchEnd={() => setIsMouseDown(false)}
                >
                    <Indicador
                        bottom='5%'
                        left='5%'
                        onClick={cleanDesplazador}
                        close
                    />
                </div>
            </StyledVisualizadorDesplazador>
        )
    }
}

export default VisualizadorDesplazador
