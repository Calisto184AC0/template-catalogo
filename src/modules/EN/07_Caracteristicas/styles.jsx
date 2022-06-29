import styled from 'styled-components'
import Seccion from '../../../components/Seccion'
import Text from '../../../components/Text'
import { column_5_span4 } from '../../../styles/grid'

const StyledCaracteristicas = styled(Seccion)`
    ${Text} {
        ${column_5_span4}
    }
`

export default StyledCaracteristicas
