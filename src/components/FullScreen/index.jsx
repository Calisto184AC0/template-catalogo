import { useEffect, useState } from 'react'
import Indicador from '../Indicador'
import StyledFullScreen from './styles'
import closeIcon from '../../assets/icons/indice/close-menu.svg'

const FullScreen = ({ imgSrc, setFullScreenSrc }) => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (imgSrc !== '') {
            setIsShow(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsShow(false)
        }
    }, [imgSrc])

    return (
        <StyledFullScreen display={isShow ? 'flex' : 'none'}>
            <img
                src={imgSrc}
                alt='Imagen a pantalla completa'
                className='muestraFondo'
            />
            <img
                src={closeIcon}
                alt='Cerrar menú'
                className='closeFullScreen'
                onClick={() => {
                    setFullScreenSrc('')
                    document.body.style.overflow = 'auto'
                }}
            />
        </StyledFullScreen>
    )
}

export default FullScreen
