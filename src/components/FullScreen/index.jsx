import { useEffect, useState, useRef } from 'react'
import Indicador from '../Indicador'
import StyledFullScreen from './styles'
import closeIcon from '../../assets/icons/indice/close-menu.svg'
import { slideUp } from '../../helpers/animations'

const FullScreen = ({ imgSrc, setFullScreenSrc, titulo }) => {
    const [isShow, setIsShow] = useState(false)
    const fullScreenRef = useRef()

    useEffect(() => {
        if (imgSrc !== '') {
            setIsShow(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsShow(false)
        }
    }, [imgSrc])

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
