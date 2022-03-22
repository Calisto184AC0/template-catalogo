import styled from 'styled-components'
import StyledIntroduccion from './styles'
import { COLORS, TextMedium } from '../../global/GlobalStyles'
import ImageWithCaption from '../../components/ImageWithCaption'

import img1 from '../../assets/images/Introduccion/catalogo3-1-1.png'
import img2 from '../../assets/images/Introduccion/catalogo3-1-2.png'
import img3 from '../../assets/images/Introduccion/catalogo-1.png'
import img4 from '../../assets/images/Introduccion/catalogo3-1-4.png'
import img5 from '../../assets/images/Introduccion/catalogo3-1-3.png'

const Text = styled.h2`
    ${TextMedium}

    grid-column: 5 / span 2;
`

const Introduccion = () => {
    return (
        <StyledIntroduccion backgroundColor={COLORS.gray02}>
            <Text>Catálogo general 2022</Text>
            <ImageWithCaption
                src={img1}
                alt='Imagen del catálogo 1'
                caption='SISTEMA DOLCKER &CLIP Seguridad mecánica y elástica en el mismo sistema'
            />
            <ImageWithCaption
                src={img2}
                alt='Imagen del catálogo 2'
                caption='DOLCKER &CLIP. Do&Wood Manzano / Do&Crete Gris'
            />
            <div>
                <img src={img3} alt='Imagen del catálogo 3' />
                <img src={img4} alt='Imagen del catálogo 4' />
                <img src={img5} alt='Imagen del catálogo 5' />
            </div>
        </StyledIntroduccion>
    )
}

export default Introduccion
