import Anotacion from '../../../components/Anotacion'
import Text from '../../../components/Text'
import { Titulo } from '../../../components/Titulos'
import useSerie from '../../../hooks/useSerie'
import StyledSerie from './styles'

const Serie = ({ id, config, setFullScreenSrc }) => {
    const { titulo, descripcion, imgsEjemplo, imgsMuestra, imgsAcabados } =
        useSerie(config, setFullScreenSrc)

    return (
        <StyledSerie id={id}>
            <Titulo>{titulo}</Titulo>
            <Anotacion
                type='swipe'
                text='Desliza con el ratón o el dedo para ver todas las imágenes'
                className='anotacion-ejemplo'
            />
            <div className='ejemplo-container'>{imgsEjemplo}</div>
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
