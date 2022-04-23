import Cita from '../../components/Cita'
import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo, Titulo2 } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import StyledDisenos from './styles'
import img1 from '../../assets/images/Diseno/catalogo3-1-14.jpg'
import fondo from '../../assets/images/Diseno/Formato/fondo.jpg'
import indicadoresFormato from '../../utils/indicadoresFormato'
import Anotacion from '../../components/Anotacion'
import VisualizadorVariaciones from '../../components/VisualizadorVariaciones'
import Anotaciones from '../../components/Anotacion/Anotaciones'
import VisualizadorRotador from '../../components/VisualizadorRotador'
import config from '../../configs/configPiezasEspeciales'
import configAcabados from '../../configs/configAcabados'
import Series from './06_1_Series'
import img2 from '../../assets/images/Diseno/Espesores/img1.jpg'
import img3 from '../../assets/images/Diseno/Espesores/img2.jpg'
import ranurado11 from '../../assets/images/Diseno/Espesores/ranurado11mm.jpg'
import ranurado14 from '../../assets/images/Diseno/Espesores/ranurado14.jpg'
import ranurado20 from '../../assets/images/Diseno/Espesores/ranurado20.jpg'

const Disenos = ({ id }) => {
    const propsFormato = {
        anotacion: {
            text: 'Pulsa en el punto para ver las posibilidades de formato',
            type: 'click',
        },
        visualizador: {
            config: indicadoresFormato,
            srcfondo: fondo,
            altFondo: 'Imagen de fondo con indicadores',
        },
    }

    return (
        <>
            <StyledDisenos id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>Diseño</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Diseños 1'
                    caption='DOLCKER &CLIP. Do&Dolm Grafito'
                />
                <Cita
                    big
                    cita='La simplicidad llevada al extremo, se convierte en elegancia.'
                    author='John Franklin'
                    colorAutor={COLORS.gray05}
                />
            </StyledDisenos>
            <StyledDisenos id={id[1]} backgroundColor={COLORS.gray02}>
                <Titulo2>Formato</Titulo2>
                <Anotacion {...propsFormato.anotacion} />
                <VisualizadorVariaciones {...propsFormato.visualizador} />
            </StyledDisenos>
            <StyledDisenos id={id[3]} backgroundColor={COLORS.gray02}>
                <Titulo2>Acabados</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Pulsa en el punto para ver todas las posibilidades de piezas especiales'
                    />
                    <Anotacion
                        type='swipe'
                        text='Desliza con el ratón o el dedo para apreciar la textura'
                    />
                </Anotaciones>
                <VisualizadorRotador
                    config={configAcabados}
                    isDesplazador='true'
                />
            </StyledDisenos>
            <StyledDisenos id={id[4]} backgroundColor={COLORS.gray02}>
                <Titulo2>Espesores</Titulo2>
                <div className='espesores-ejemplos'>
                    <img src={img2} alt='' />
                    <img src={img3} alt='' />
                </div>
                <div className='espesor espesor-1'>
                    <img src={ranurado11} alt='' />
                    <ul>
                        <strong>TC 11 / 11 mm.</strong>
                        <li>Suelo</li>
                        <li>Techo</li>
                        <li>Fachada</li>
                    </ul>
                </div>
                <div className='espesor espesor-2'>
                    <img src={ranurado14} alt='' />
                    <ul>
                        <strong>TC 14 / 14 mm.</strong>
                        <li>Suelo</li>
                        <li>Techo</li>
                        <li>Fachada</li>
                        <li>Recerco</li>
                    </ul>
                </div>
                <div className='espesor espesor-3'>
                    <img src={ranurado20} alt='' />
                    <ul>
                        <strong>TC 20 / 20 mm.</strong>
                        <li>Suelo técnico</li>
                        <li>Fachada</li>
                        <li>Recerco</li>
                        <li>Cubiertas</li>
                        <li>Vierteaguas</li>
                        <li>Rejilla</li>
                        <li>Peldaño</li>
                    </ul>
                </div>
            </StyledDisenos>
            <StyledDisenos id={id[5]} backgroundColor={COLORS.gray02}>
                <Titulo2>Piezas especiales</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Pulsa en el punto para ver todas las posibilidades de piezas especiales'
                    />
                    <Anotacion
                        type='swipe'
                        text='Desliza con el ratón o el dedo para rotar la imagen 360º'
                    />
                </Anotaciones>
                <VisualizadorRotador config={config} />
            </StyledDisenos>
            <Series
                ids={[
                    'basalt',
                    'dolm',
                    'dquartz',
                    'marble',
                    'stone',
                    'quarcity',
                    'crete',
                    'portland',
                    'space',
                    'tzment',
                    'wood',
                    'terrazo',
                    'arquitect',
                    'volumen',
                ]}
            />
        </>
    )
}

export default Disenos
