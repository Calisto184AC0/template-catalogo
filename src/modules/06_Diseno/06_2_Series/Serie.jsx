import { useRef, useState } from 'react'
import AmbienteContainer from '../../../components/AmbienteContainer'
import Anotacion from '../../../components/Anotacion'
import Text from '../../../components/Text'
import { Titulo } from '../../../components/Titulos'
import useSerie from '../../../hooks/useSerie'
import StyledSerie from './styles'

const Serie = ({
    children,
    id,
    config,
    setFullScreenSrc,
    setFullScreenTitulo,
    backgroundColor,
}) => {
    const {
        titulo,
        descripcion,
        imgsMuestra,
        imgsAcabados,
        indicadores,
        imgAmbiente,
        imgSelectorAmbiente,
    } = useSerie(config, setFullScreenSrc, setFullScreenTitulo)

    const [isOverflow, setIsOverflow] = useState(false)
    const divEjemplosRef = useRef()

    const handleOnLoad = () => {
        const overflowBoolean =
            divEjemplosRef.current.scrollWidth >
            divEjemplosRef.current.clientWidth
        setIsOverflow(overflowBoolean)
    }

    return (
        <StyledSerie id={id} backgroundColor={backgroundColor}>
            <Titulo>{titulo}</Titulo>
            {isOverflow ? (
                <Anotacion
                    type='swipe'
                    text='Desliza con el ratón o el dedo para ver todas las imágenes'
                    className='anotacion-ejemplo'
                />
            ) : undefined}

            <AmbienteContainer onLoad={handleOnLoad} ref={divEjemplosRef}>
                {imgAmbiente}
                <AmbienteContainer.SeleccionarMuestra>
                    {imgSelectorAmbiente}
                    {indicadores}
                </AmbienteContainer.SeleccionarMuestra>
            </AmbienteContainer>

            <Text className='text-descripcion'>{descripcion}</Text>
            <Anotacion
                type='click'
                text='Pulsa en la imagen para ver la imagen a tamaño completo'
                className='anotacion-muestra'
            />
            <div className='muestra-container'>{imgsMuestra}</div>
            {imgsAcabados ? (
                <>
                    <Text className='text-acabados'>Acabados</Text>
                    <div className='acabado-container'>{imgsAcabados}</div>
                </>
            ) : undefined}
            {children}
        </StyledSerie>
    )
}

export default Serie
