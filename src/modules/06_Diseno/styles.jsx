import styled from 'styled-components'
import Anotaciones from '../../components/Anotacion/Anotaciones'
import StyledAnotacion from '../../components/Anotacion/styles'
import StyledCita from '../../components/Cita/styles'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import StyledVisualizadorRotador from '../../components/VisualizadorRotador/styles'
import StyledVisualizadorVariaciones from '../../components/VisualizadorVariaciones/styles'

const StyledDisenos = styled(Seccion)`
    ${StyledImageWithCaption} {
        grid-column: 5 / span 8;
    }

    ${StyledCita} {
        grid-column: 5 / span 6;
    }

    ${StyledAnotacion}, ${Anotaciones} {
        grid-column: 3 / span 2;
    }

    ${StyledVisualizadorVariaciones}, ${StyledVisualizadorRotador} {
        grid-column: 5 / span 8;
    }
`

export default StyledDisenos
