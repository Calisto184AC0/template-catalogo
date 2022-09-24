import styled, { css } from 'styled-components'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { DISTANCES } from '../../global/GlobalStyles'
import {
    column_5_span6,
    column_5_span8,
    gridLayoutTemplate,
} from '../../styles/grid'
import { mediaQueryTablet } from '../../styles/sizes'

export const Enlaces = styled.ul`
    ${gridLayoutTemplate({
        numColumns: 4,
        columnGap: DISTANCES.small,
        rowGap: DISTANCES.small,
    })}

    li {
        a {
            color: black;
            text-decoration: none;
        }

        ${mediaQueryTablet(css`
            grid-column: 1 / -1;
        `)}
    }
`

const StyledSistemas = styled(Seccion)`
    ${Enlaces} {
        ${column_5_span8}
    }
    ${Text} {
        ${column_5_span6}
    }
`

export default StyledSistemas
