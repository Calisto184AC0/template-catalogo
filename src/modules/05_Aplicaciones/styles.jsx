import styled from 'styled-components'
import StyledCita from '../../components/CIta/styles'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'

const StyledAplicaciones = styled(Seccion)`
    row-gap: ${props => props.rowGap || '0px'};

    ${StyledImageWithCaption} {
        grid-column: 5 / span 6;
    }

    ${StyledCita} {
        grid-column: 5 / span 6;
    }
`

export default StyledAplicaciones
