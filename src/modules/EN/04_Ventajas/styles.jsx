import styled from 'styled-components'
import Seccion from '../../../components/Seccion'
import Text from '../../../components/Text'
import { Column4, DISTANCES } from '../../../global/GlobalStyles'

const StyledVentajas = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    ${Text} {
        ${Column4}
    }
`

export default StyledVentajas
