import styled, { css } from 'styled-components'
import Seccion from '../../../components/Seccion'
import { Titulo2 } from '../../../components/Titulos'
import { column_5_span7, column_total } from '../../../styles/grid'
import { mediaQueryTablet } from '../../../styles/sizes'
import Enlace from './Enlace'

const SyledIndiceSeries = styled(Seccion)`
    ${Titulo2} {
        ${column_total}
    }

    ${Enlace}, > .enlace {
        grid-column-end: span 2;
        ${mediaQueryTablet(css`
            grid-column-start: 1;
            grid-column-end: -1;
        `)}
    }
`

export default SyledIndiceSeries
