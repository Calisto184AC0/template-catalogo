import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import StyledDolcker from './styles'
import { COLORS } from '../../../global/GlobalStyles'

import img2 from '../../../assets/images/Dolcker/catalogo3-1-5.webp'
import img3 from '../../../assets/images/Dolcker/catalogo3-1-7.webp'
import VisualizadorNota from '../../../components/VisualizadorNota'
import Text from '../../../components/Text'

import config from '../../../configs/EN/configDolcker'

const Dolcker = ({ id }) => {
    const propsVisualizador = {
        text: 'Move the mouse over the points to see the information',
        type: 'normal',
        indicadores: config,
        imgBackground: img3,
        alt: 'Imagen de fondo con indicadores',
    }

    return (
        <StyledDolcker id={id} backgroundColor={COLORS.gray03}>
            <Titulo>Dolcker solves</Titulo>
            <div className='dolcker-info'>
                <ImageWithCaption
                    src={img2}
                    alt='Imagen Dolcker 2'
                    caption='DOLCKER &CLIP SYSTEM Mechanical and elastic safety in the same system'
                />
                <Text>
                    The first ful&body continuous groove system,{' '}
                    <strong>with endless modulation possibilities.</strong> The
                    DOLCKER system allows the design of facades, with technical
                    solutions for the development of raised floors, ceilings, as
                    well as window surrounds, crown caps, always using the same
                    material.
                    <br />
                    <br />
                    The ful&body technology allows the design of continuous
                    building edges.
                    <br />
                    <br />
                    DOLCKER has developed 4 high security placement systems for
                    technicians to design unique buildings.
                </Text>
            </div>
            <VisualizadorNota {...propsVisualizador} />
        </StyledDolcker>
    )
}

export default Dolcker
