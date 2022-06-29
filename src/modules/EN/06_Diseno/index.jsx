import Cita from '../../../components/Cita'
import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo, Titulo2 } from '../../../components/Titulos'
import { COLORS } from '../../../global/GlobalStyles'
import StyledDisenos from './styles'
import img1 from '../../../assets/images/Diseno/catalogo3-1-14.webp'
import fondo from '../../../assets/images/Diseno/Formato/fondo.webp'
import indicadoresFormato from '../../../utils/en/indicadoresFormato'
import Anotacion from '../../../components/Anotacion'
import VisualizadorVariaciones from '../../../components/VisualizadorVariaciones'
import Anotaciones from '../../../components/Anotacion/Anotaciones'
import VisualizadorRotador from '../../../components/VisualizadorRotador'
import config from '../../../configs/EN/configPiezasEspeciales'
import configAcabados from '../../../configs/configAcabados'
import Series from './06_2_Series'
import img2 from '../../../assets/images/Diseno/Espesores/img1.webp'
import img3 from '../../../assets/images/Diseno/Espesores/img2.webp'
import ranurado11 from '../../../assets/images/Diseno/Espesores/ranurado11mm.webp'
import ranurado14 from '../../../assets/images/Diseno/Espesores/ranurado14.webp'
import ranurado20 from '../../../assets/images/Diseno/Espesores/ranurado20.webp'
import VisualizadorDesplazador from '../../../components/VisualizadorDesplazador'
import IndiceSeries from './06_1_IndiceSeries'

const Disenos = ({ id }) => {
    const propsFormato = {
        anotacion: {
            text: 'Click on the point to see the formatting possibilities',
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
                <Titulo>DESIGN</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Diseños 1'
                    caption='DOLCKER &CLIP. Do&Dolm Grafito'
                    columnSpan='6'
                />
                <Cita
                    big
                    cita='Simplicity taken to the extreme becomes elegance.'
                    author='John Franklin'
                    colorAutor={COLORS.gray05}
                />
            </StyledDisenos>
            <StyledDisenos id={id[1]} backgroundColor={COLORS.gray02}>
                <Titulo2>Format</Titulo2>
                <Anotacion {...propsFormato.anotacion} />
                <VisualizadorVariaciones {...propsFormato.visualizador} />
            </StyledDisenos>
            <StyledDisenos id={id[3]} backgroundColor={COLORS.gray02}>
                <Titulo2>Finishes</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Click on the point to see all the possibilities of special pieces'
                    />
                    <Anotacion
                        type='swipe'
                        text='Swipe with your mouse or finger to appreciate the texture'
                    />
                </Anotaciones>
                <VisualizadorDesplazador config={configAcabados} />
            </StyledDisenos>
            <StyledDisenos
                id={id[4]}
                backgroundColor={COLORS.gray02}
                isEspesores
            >
                <Titulo2>Thicknesses</Titulo2>
                <div className='espesores-ejemplos'>
                    <img src={img2} alt='' />
                    <img src={img3} alt='' />
                </div>
                <div className='espesor espesor-1'>
                    <img src={ranurado11} alt='' />
                    <ul>
                        <strong>TC 11 / 11 mm.</strong>
                        <li>Floor</li>
                        <li>Ceiling</li>
                        <li>Facade</li>
                    </ul>
                </div>
                <div className='espesor espesor-2'>
                    <img src={ranurado14} alt='' />
                    <ul>
                        <strong>TC 14 / 14 mm.</strong>
                        <li>Floor</li>
                        <li>Ceiling</li>
                        <li>Facade</li>
                        <li>Fence</li>
                    </ul>
                </div>
                <div className='espesor espesor-3'>
                    <img src={ranurado20} alt='' />
                    <ul>
                        <strong>TC 20 / 20 mm.</strong>
                        <li>Raised floor</li>
                        <li>Facade</li>
                        <li>Fence</li>
                        <li>Covers</li>
                        <li>Flashing</li>
                        <li>Rack</li>
                        <li>Step</li>
                    </ul>
                </div>
            </StyledDisenos>
            <StyledDisenos id={id[5]} backgroundColor={COLORS.gray02}>
                <Titulo2>Special pieces</Titulo2>
                <Anotaciones>
                    <Anotacion
                        type='normal'
                        text='Click on the point to see all the possibilities of special pieces'
                    />
                    <Anotacion
                        type='swipe'
                        text='Swipe with your mouse or finger to rotate the image 360º'
                    />
                </Anotaciones>
                <VisualizadorRotador config={config} />
            </StyledDisenos>
            <IndiceSeries id={id[6]} />
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
