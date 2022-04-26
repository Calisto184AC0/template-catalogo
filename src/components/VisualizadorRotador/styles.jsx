import styled from 'styled-components'
import { Column8 } from '../../global/GlobalStyles'
import StyledMenu from '../VisualizadorVariaciones/Menu/styles'

const StyledVisualizadorRotador = styled.div`
    ${Column8}

    position: relative;
    user-select: none;

    img {
        user-select: none;
    }

    .indicadores {
        cursor: col-resize;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    ${StyledMenu} {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 3;
    }
`

export default StyledVisualizadorRotador
