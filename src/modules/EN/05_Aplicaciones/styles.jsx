import styled from 'styled-components'
import StyledCita from '../../../components/Cita/styles'
import StyledImageWithCaption from '../../../components/ImageWithCaption/styles'
import Seccion from '../../../components/Seccion'
import { Column6 } from '../../../global/GlobalStyles'

const StyledAplicaciones = styled(Seccion)`
    row-gap: ${props => props.rowGap || '0px'};

    ${StyledImageWithCaption}.distinto {
        grid-column: 5 / span 4;
    }
`

export default StyledAplicaciones
