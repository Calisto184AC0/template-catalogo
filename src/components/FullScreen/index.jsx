import { useEffect, useState } from 'react'
import Indicador from '../Indicador'
import StyledFullScreen from './styles'

const FullScreen = ({ imgSrc, setFullScreenSrc }) => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (imgSrc !== '') {
            setIsShow(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsShow(false)
            document.body.style.overflow = 'auto'
        }
    }, [imgSrc])

    return (
        <StyledFullScreen display={isShow ? 'flex' : 'none'}>
            <img
                src={imgSrc}
                alt='Imagen a pantalla completa'
                className='hide'
            />
            <Indicador
                top='10%'
                left='90%'
                onClick={() => setFullScreenSrc('')}
                style={{ cursor: 'pointer' }}
            />
        </StyledFullScreen>
    )
}

export default FullScreen
