import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledVentajas from './styles'
import img1 from '../../../assets/images/Ventajas/catalogo3-1-8.webp'
import Text from '../../../components/Text'
import { COLORS } from '../../../global/GlobalStyles'
import Listado from '../../../components/Listado'

const Ventajas = ({ id }) => {
    return (
        <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
            <Titulo>ADVANTAGES OF THE DOLCKER SYSTEM</Titulo>
            <ImageWithCaption
                src={img1}
                alt='Imagen de Ventajas 1'
                caption='DOLCKER &CLIP. Do &Conce Gris+Do&Arquitect'
                columnSpan='6'
            />
            <Text>
                It has an improved technical{' '}
                <strong>fixing development for ventilated facades,</strong> to
                adapt to both the aesthetic and functional needs of the project.
            </Text>
            <Listado>
                <li>Hidden mechanical fixing system + elastic fixing</li>
                <li>Detachable system</li>
                <li>Sliding clip (safety for scaffolding bracing parts)</li>
                <li>High inertia continuous profile to support high loads</li>
                <li>Factory calibrated continuous groove</li>
                <li>Free placement system</li>
                <li>Many part sizes</li>
                <li>Tailor-made exploded view</li>
                <li>Different thicknesses of pieces (11, 14 and 20 mm)</li>
                <li>System developed for gaps up to 20 cm</li>
                <li>Pieces with &quot;full body &quot; edge</li>
                <li>
                    Manufacture of pieces with matte, flamed and honed textures
                </li>
                <li>Quick and safe assembly</li>
                <li>Versatile system when designing the façade</li>
            </Listado>
        </StyledVentajas>
    )
}

export default Ventajas
