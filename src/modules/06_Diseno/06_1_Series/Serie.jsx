import { useRef, useState } from 'react'
import Anotacion from '../../../components/Anotacion'
import Text from '../../../components/Text'
import { Titulo } from '../../../components/Titulos'
import useSerie from '../../../hooks/useSerie'
import StyledSerie from './styles'

const Serie = ({ id, config, setFullScreenSrc }) => {
    const { titulo, descripcion, imgsEjemplo, imgsMuestra, imgsAcabados } =
        useSerie(config, setFullScreenSrc)

    const [isOverflow, setIsOverflow] = useState(false)
    const divEjemplosRef = useRef()

    const handleOnLoad = () => {
        const overflowBoolean =
            divEjemplosRef.current.scrollWidth >
            divEjemplosRef.current.clientWidth
        setIsOverflow(overflowBoolean)
    }

    return (
        <StyledSerie id={id}>
            <Titulo>{titulo}</Titulo>
            {isOverflow ? (
                <Anotacion
                    type='swipe'
                    text='Desliza con el ratón o el dedo para ver todas las imágenes'
                    className='anotacion-ejemplo'
                />
            ) : undefined}

            <div
                className='ejemplo-container'
                onLoad={handleOnLoad}
                ref={divEjemplosRef}
            >
                {imgsEjemplo}
            </div>
            <Text className='text-descripcion'>{descripcion}</Text>
            <Anotacion
                type='click'
                text='Pulsa en la imagen para ver la imagen a tamaño completo'
                className='anotacion-muestra'
            />
            <div className='muestra-container'>{imgsMuestra}</div>
            <Text className='text-acabados'>Acabados</Text>
            <div className='acabado-container'>{imgsAcabados}</div>
        </StyledSerie>
    )
}

export default Serie
