import styled from 'styled-components'
import { GRID, TextMedium } from '../../global/GlobalStyles'
import { column_5_span6 } from '../../styles/grid'
import { DISTANCES } from '../../styles/sizes'
import swipe from '../../assets/icons/handswipe.svg'

const StyledVisualizadorDesplazador = styled.div`
    ${column_5_span6}
    position: relative;

    .indicadores {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    .desplazador {
        cursor: url(${swipe}), col-resize;
    }

    > span {
        ${TextMedium}
        position: absolute;
        top: ${DISTANCES.medium};
        left: ${DISTANCES.medium};
        z-index: 3;
        //color: white;
        //mix-blend-mode: difference;
    }
`

export default StyledVisualizadorDesplazador
