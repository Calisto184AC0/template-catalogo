import styled from 'styled-components'
import Logo from '../../components/Logo'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { TextSmall } from '../../global/GlobalStyles'
import { column_5_span6 } from '../../styles/grid'

const StyledFinal = styled(Seccion)`
    ${Logo}, ${Text} {
        ${column_5_span6}
    }

    ${Text} {
        ${TextSmall}
    }
`

export default StyledFinal
