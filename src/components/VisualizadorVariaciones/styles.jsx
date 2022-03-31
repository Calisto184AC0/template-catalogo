import styled from 'styled-components'
import { COLORS, DISTANCES } from '../../global/GlobalStyles'
import StyledMenu from './Menu/styles'

const StyledVisualizadorVariaciones = styled.div`
    position: relative;

    .img-foreground {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        // No pongo más porque ya está definido en img {widht y height 100%}
    }

    .indicadores {
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

export default StyledVisualizadorVariaciones
