/* eslint-disable react/jsx-key */
import { useEffect, useState, useRef, Children } from 'react'
import StyledFullScreen from './styles'
import closeIcon from '../../assets/icons/indice/close-menu.svg'
import { slideUp } from '../../helpers/animations'
import izq from '../../assets/icons/desplIzq.svg'
import der from '../../assets/icons/desplDer.svg'
import { simpleHorizontalScroll } from '../../helpers/scrollTo'

const FullScreen = ({
    imgSrc,
    setFullScreenSrc,
    titulo,
    setFullScreenTitulo,
}) => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [initClientX, setInitClientX] = useState(0)
    const [initScrollLeft, setInitScrollLeft] = useState(0)
    const [desplazamiento, setDesplazamiento] = useState(0)

    const [isShow, setIsShow] = useState(false)
    const [indiceSrc, setIndiceSrc] = useState(0)
    const fullScreenRef = useRef()

    const imgsContainerRef = useRef()

    const imgsContainerId = 'id-imgs'

    useEffect(() => {
        if (Array.isArray(imgSrc)) {
            if (imgSrc[indiceSrc].toLowerCase().includes('honed'))
                setFullScreenTitulo(prevTitulo => {
                    const ultimaPalabra = prevTitulo
                        .split(' ')
                        .slice(-1)
                        .toString()
                        .toLowerCase()

                    if (ultimaPalabra === 'flamed' || ultimaPalabra === 'mate')
                        return `${prevTitulo
                            .split(' ')
                            .slice(0, -1)
                            .join(' ')} Honed`

                    return `${prevTitulo} Honed`
                })
            if (imgSrc[indiceSrc].toLowerCase().includes('flamed'))
                setFullScreenTitulo(prevTitulo => {
                    const ultimaPalabra = prevTitulo
                        .split(' ')
                        .slice(-1)
                        .toString()
                        .toLowerCase()

                    if (ultimaPalabra === 'honed' || ultimaPalabra === 'mate')
                        return `${prevTitulo
                            .split(' ')
                            .slice(0, -1)
                            .join(' ')} Flamed`

                    return `${prevTitulo} Flamed`
                })
            if (imgSrc[indiceSrc].toLowerCase().includes('mate'))
                setFullScreenTitulo(prevTitulo => {
                    const ultimaPalabra = prevTitulo
                        .split(' ')
                        .slice(-1)
                        .toString()
                        .toLowerCase()

                    if (ultimaPalabra === 'flamed' || ultimaPalabra === 'honed')
                        return `${prevTitulo
                            .split(' ')
                            .slice(0, -1)
                            .join(' ')} Mate`

                    return `${prevTitulo} Mate`
                })
        }

        if (imgSrc !== '') {
            setIsShow(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsShow(false)
        }
    }, [imgSrc, indiceSrc])

    if (Array.isArray(imgSrc)) {
        const images = Children.toArray(
            imgSrc.map(src => {
                return (
                    <img
                        src={src}
                        alt='Imagen a pantalla completa'
                        className='muestraFondo'
                    />
                )
            })
        )

        const pointerDown = e => {
            if (isMouseDown) return

            setInitClientX(e.clientX)
            setInitScrollLeft(e.target.scrollLeft)
            setIsMouseDown(true)
        }

        const pointerUp = () => {
            setIsMouseDown(false)

            if (desplazamiento > window.innerWidth / 4) desplDer()
            else if (desplazamiento < -window.innerWidth / 4) desplIzq()
            else
                imgsContainerRef.current.children[indiceSrc].scrollIntoView({
                    behavior: 'smooth',
                })
        }

        const pointerMove = e => {
            if (!isMouseDown) return

            e.target.scrollLeft = initScrollLeft + (initClientX - e.clientX)
            setDesplazamiento(initClientX - e.clientX)
        }

        const mouseMove = e => pointerMove(e)
        const touchMove = e => pointerMove(e.touches[0])

        const pointerEvents = {
            onPointerDown: pointerDown,
            onPointerUp: pointerUp,
            onMouseMove: mouseMove,
            onTouchMove: touchMove,
            onTouchEnd: pointerUp,
        }

        const desplDer = () => {
            setIndiceSrc(prevIndice => {
                if (prevIndice === imgSrc.length - 1) return imgSrc.length - 1

                const newIndice = prevIndice + 1

                simpleHorizontalScroll(
                    imgsContainerRef.current.children[newIndice].offsetLeft,
                    1000,
                    imgsContainerId
                )

                // NO FUNCIONA EN MOVIL
                // imgsContainerRef.current.children[newIndice].scrollIntoView({
                //     behavior: 'smooth',
                // })

                return newIndice
            })
        }
        const desplIzq = () => {
            setIndiceSrc(prevIndice => {
                if (prevIndice === 0) return 0

                const newIndice = prevIndice - 1

                simpleHorizontalScroll(
                    imgsContainerRef.current.children[newIndice].offsetLeft,
                    1000,
                    imgsContainerId
                )

                // imgsContainerRef.current.children[newIndice].scrollIntoView({
                //     behavior: 'smooth',
                // })

                return newIndice
            })
        }

        return (
            <StyledFullScreen
                display={isShow ? 'flex' : 'none'}
                ref={fullScreenRef}
            >
                <div
                    className='slider'
                    id={imgsContainerId}
                    ref={imgsContainerRef}
                    {...pointerEvents}
                >
                    {images}
                </div>
                <span>{titulo}</span>
                <div className='controles'>
                    <img
                        src={izq}
                        alt='Desplazar a la izquierda'
                        onClick={desplIzq}
                    />
                    <span>{`${indiceSrc + 1} / ${imgSrc.length}`}</span>
                    <img
                        src={der}
                        alt='Desplazar a la derecha'
                        onClick={desplDer}
                    />
                </div>
                <img
                    src={closeIcon}
                    alt='Cerrar menú'
                    className='closeFullScreen'
                    onClick={() => {
                        slideUp(fullScreenRef.current, 1, () => {
                            setFullScreenSrc('')
                            document.body.style.overflow = 'auto'
                            setIndiceSrc(0)
                        })
                    }}
                />
            </StyledFullScreen>
        )
    }

    return (
        <StyledFullScreen
            display={isShow ? 'flex' : 'none'}
            ref={fullScreenRef}
        >
            <img
                src={imgSrc}
                alt='Imagen a pantalla completa'
                className='muestraFondo'
            />
            <span>{titulo}</span>
            <img
                src={closeIcon}
                alt='Cerrar menú'
                className='closeFullScreen'
                onClick={() => {
                    slideUp(fullScreenRef.current, 1, () => {
                        setFullScreenSrc('')
                        document.body.style.overflow = 'auto'
                    })
                }}
            />
        </StyledFullScreen>
    )
}

export default FullScreen
