import styled from 'styled-components'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import {
    Column4,
    Column6,
    DISTANCES,
    TextMedium,
} from '../../global/GlobalStyles'
import check from '../../assets/icons/check.svg'

const StyledVentajas = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    ${Text} {
        ${Column4}
    }
`

export default StyledVentajas
