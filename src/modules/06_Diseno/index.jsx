import Cita from '../../components/Cita'
import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo, Titulo2 } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import StyledDisenos from './styles'
import img1 from '../../assets/images/Diseno/catalogo3-1-14.png'
import fondo from '../../assets/images/Diseno/Formato/fondo.jpg'
import indicadoresFormato from '../../utils/indicadoresFormato'
import Anotacion from '../../components/Anotacion'
import VisualizadorVariaciones from '../../components/VisualizadorVariaciones'
import Anotaciones from '../../components/Anotacion/Anotaciones'
import VisualizadorRotador from '../../components/VisualizadorRotador'
import config from '../../configs/configPiezasEspeciales'
import Series from './06_1_Series'

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
            <StyledDisenos id={id[2]} backgroundColor={COLORS.gray02}>
                <Titulo2>Despiece</Titulo2>
                <Anotacion {...propsFormato.anotacion} />
                <VisualizadorVariaciones {...propsFormato.visualizador} />
            </StyledDisenos>
            <StyledDisenos id={id[3]} backgroundColor={COLORS.gray02}>
                <Titulo2>Acabados</Titulo2>
            </StyledDisenos>
            <StyledDisenos id={id[4]} backgroundColor={COLORS.gray02}>
                <Titulo2>Espesores</Titulo2>
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
                    'piedra',
                    'Cemento',
                    'Madera',
                    'Terrazo',
                    'Monocolor',
                    'Volumen',
                ]}
            />
        </>
    )
}

export default Disenos
