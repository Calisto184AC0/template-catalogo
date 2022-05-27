import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo } from '../../components/Titulos'
import StyledVentajas from './styles'
import img1 from '../../assets/images/Ventajas/catalogo3-1-8.webp'
import Text from '../../components/Text'
import { COLORS } from '../../global/GlobalStyles'
import Listado from '../../components/Listado'

const Ventajas = ({ id }) => {
    return (
        <StyledVentajas id={id} backgroundColor={COLORS.gray02}>
            <Titulo>Ventajas del sistema Dolcker</Titulo>
            <ImageWithCaption
                src={img1}
                alt='Imagen de Ventajas 1'
                caption='DOLCKER &CLIP. Do &Conce Gris+Do&Arquitect'
                columnSpan='6'
            />
            <Text>
                Dispone de un desarrollo técnico de{' '}
                <strong>fijación para fachadas ventiladas mejorado,</strong>{' '}
                para adaptarse a las necesidades tanto estéticas como
                funcionales del proyecto.
            </Text>
            <Listado>
                <li>Sistema de fijación mecánica oculta + fijación elástica</li>
                <li>Sistema desmontable</li>
                <li>
                    Clip correderos (seguridad para piezas de ariostamiento
                    andamios)
                </li>
                <li>
                    Perfil continuo de gran inercia para soporte de grandes
                    cargas
                </li>
                <li>Ranura continua calibrada en fábrica</li>
                <li>Sistema de libre colocación</li>
                <li>Multitud de tamaños de piezas</li>
                <li>Despiece a medida</li>
                <li>Diferentes espesores de piezas (11, 14 y 20 mm)</li>
                <li>Sistema desarrollado para cámaras de hasta 20 cm</li>
                <li>Piezas con canto visto &quot;full body&quot;</li>
                <li>Fabricación de piezas con texturas mate, flamed y honed</li>
                <li>Montaje rápido y seguro</li>
                <li>Sistema versátil a la hora de diseñar la fachada</li>
            </Listado>
        </StyledVentajas>
    )
}

export default Ventajas
