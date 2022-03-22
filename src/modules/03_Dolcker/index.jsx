import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo } from '../../components/Titulos'
import StyledDolcker from './styles'
import { COLORS } from '../../global/GlobalStyles'

import img1 from '../../assets/images/Dolcker/catalogo3-1-6.png'
import img2 from '../../assets/images/Dolcker/catalogo3-1-5.png'
import img3 from '../../assets/images/Dolcker/catalogo3-1-7.png'
import indicadores from '../../utils/indicadoresDolcker.json'
import VisualizadorNota from '../../components/VisualizadorNota'
import Text from '../../components/Text'

const Dolcker = ({ id }) => {
    const propsVisualizador = {
        text: 'Pasa el ratón por los puntos para ver la información',
        type: 'normal',
        indicadores,
        imgBackground: img3,
        alt: 'Imagen de fondo con indicadores',
    }

    return (
        <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
            <Titulo>Dolcker soluciona</Titulo>
            <div className='dolcker-info'>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen Dolcker 1'
                    caption='DOLCKER &CLIP. Do&Wood Manzano / Do&Crete Gris'
                />
                <ImageWithCaption
                    src={img2}
                    alt='Imagen Dolcker 2'
                    caption='SISTEMA DOLCKER &CLIP Seguridad mecánica y elástica en el mismo sistema'
                />
                <Text>
                    El primer sistema de ranura continua ful&body,{' '}
                    <strong>
                        con infinitas posibilidades de modulaciones.
                    </strong>{' '}
                    El sistema DOLCKER permite diseñar fachadas, con soluciones
                    técnicas para el desarrollo suelos elevados , techos así
                    como recercados de ventanas tapas de coronación siempre
                    utilizando el mismo material.
                    <br />
                    <br />
                    La tecnología ful&body permite diseñar aristas del edificio
                    continuas.
                    <br />
                    <br />
                    DOLCKER, ha desarrollado 4 sistema de colocación de alta
                    seguridad para que los técnicos diseñen edificos singulares.
                </Text>
            </div>
            <VisualizadorNota {...propsVisualizador} />
        </StyledDolcker>
    )
}

export default Dolcker
