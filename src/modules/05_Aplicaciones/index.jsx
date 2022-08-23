import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo, Titulo2, Titulo3 } from '../../components/Titulos'
import { COLORS, DISTANCES } from '../../global/GlobalStyles'
import StyledAplicaciones from './styles'
import img1 from '../../assets/images/Aplicaciones/catalogo3-1-9.webp'
import img2 from '../../assets/images/Aplicaciones/catalogo3-1-10.webp'
import img3 from '../../assets/images/Aplicaciones/catalogo3-1-11.webp'
import img4 from '../../assets/images/Aplicaciones/catalogo3-1-12.webp'
import img5 from '../../assets/images/Aplicaciones/catalogo3-1-13.webp'
import Cita from '../../components/Cita'

const Aplicaciones = ({ id }) => {
    return (
        <>
            <StyledAplicaciones
                id={id[0]}
                backgroundColor={COLORS.gray08}
                rowGap={DISTANCES.long}
            >
                <Titulo color={COLORS.gray01}>Aplicaciones</Titulo>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Aplicaciones 1'
                    caption='DOLCKER &CLIP. Do&Marble Calacatta + Do&Wood Eucalipto'
                    columnSpan='6'
                />
                <Cita
                    big
                    cita='El trabajo del arquitecto de hoy es crear hermosos edificios. Eso es todo.'
                    author='Philip Johnson'
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[1]}
                backgroundColor={COLORS.gray08}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray01}>Rehabilitación</Titulo2>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen de Aplicaciones 1'
                    caption='DOL -TC11. Do&Dolm Nacar'
                    columnSpan='6'
                />
                <Cita
                    cita='Vivimos en un mundo maravilloso que está lleno de belleza, encanto y aventura. No hay un límite para las aventuras que podemos tener siempre y cuando las busquemos con los ojos bien abiertos.'
                    author='Jawaharial Nehru'
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[2]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo2 color={COLORS.gray01}>Obra nueva</Titulo2>
                <ImageWithCaption
                    src={img3}
                    alt='Imagen de Aplicaciones 1'
                    caption='DOL -TC14. Do&Quarz Grey / Do&Quarz Black'
                    columnSpan='6'
                />
                <Cita
                    cita='Cuando estoy trabajando en un problema, nunca pienso en su belleza. Solo pienso en cómo resolver el problema. Pero cuando lo termino, si la solución no es bella, se que está equivocada'
                    author='Richard Buckminster Fuller'
                    colorCita={COLORS.gray01}
                    colorAutor={COLORS.gray03}
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[3]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray01}>— Fachadas</Titulo3>
                <ImageWithCaption
                    src={img4}
                    alt='Imagen de Aplicaciones 4'
                    caption='DOL -TC20. Do&Space Ivory'
                    columnSpan='6'
                />
            </StyledAplicaciones>
            <StyledAplicaciones
                id={id[4]}
                backgroundColor={COLORS.gray06}
                rowGap={DISTANCES.medium}
            >
                <Titulo3 color={COLORS.gray01}>
                    — Terrazas, suelos elevados, techos y soluciones
                </Titulo3>
                <ImageWithCaption
                    src={img5}
                    alt='Imagen de Aplicaciones 5'
                    caption='DOL -TC11. Do&Space Ivory'
                    columnSpan='6'
                />
            </StyledAplicaciones>
        </>
    )
}

export default Aplicaciones
