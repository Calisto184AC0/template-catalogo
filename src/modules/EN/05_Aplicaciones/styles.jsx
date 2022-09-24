import styled from 'styled-components'
import StyledImageWithCaption from '../../../components/ImageWithCaption/styles'
import Seccion from '../../../components/Seccion'

const StyledAplicaciones = styled(Seccion)`
    row-gap: ${props => props.rowGap || '0px'};

    ${StyledImageWithCaption}.distinto {
        grid-column: 5 / span 4;
    }
`

export default StyledAplicaciones
