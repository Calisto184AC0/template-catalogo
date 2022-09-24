import { useRef, useState } from 'react'
import AmbienteContainer from '../../../../components/AmbienteContainer'
import Anotacion from '../../../../components/Anotacion'
import Text from '../../../../components/Text'
import { Titulo } from '../../../../components/Titulos'
import useSerie from '../../../../hooks/useSerie'
import StyledSerie from './styles'

const Serie = ({
    id,
    config,
    setFullScreenSrc,
    setFullScreenTitulo,
    backgroundColor,
    children,
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
                    text='Swipe with your mouse or finger to see all the images'
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
                text='Click on the image to see the full size image'
                className='anotacion-muestra'
            />
            <div className='muestra-container'>{imgsMuestra}</div>
            {imgsAcabados ? (
                <>
                    <Text className='text-acabados'>Finishes</Text>
                    <div className='acabado-container'>{imgsAcabados}</div>
                </>
            ) : undefined}
            {children}
        </StyledSerie>
    )
}

export default Serie
