import styled from 'styled-components'
import Logo from '../../components/Logo'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { column_5_span6 } from '../../styles/grid'

const StyledFinal = styled(Seccion)`
    ${Logo}, ${Text} {
        ${column_5_span6}
    }
`

export default StyledFinal
