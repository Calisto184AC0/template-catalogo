import styled from 'styled-components'
import { Column8, TextMedium } from '../../global/GlobalStyles'
import StyledMenu from '../VisualizadorVariaciones/Menu/styles'
import wipe from '../../assets/icons/wipe.svg'

const StyledVisualizadorRotador = styled.div`
    ${Column8}

    position: relative;
    user-select: none;

    img {
        user-select: none;
    }

    > span {
        ${TextMedium}
        position: absolute;
        top: 5%;
        left: 4%;
        z-index: 2;
        //color: white;
        //mix-blend-mode: difference;
    }

    .indicadores {
        cursor: url(${wipe}), col-resize;
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
