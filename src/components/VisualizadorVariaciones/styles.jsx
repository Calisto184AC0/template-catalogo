import styled from 'styled-components'
import { Column8, TextMedium } from '../../global/GlobalStyles'
import StyledMenu from './Menu/styles'

const StyledVisualizadorVariaciones = styled.div`
    ${Column8}

    position: relative;

    > span {
        ${TextMedium}
        position: absolute;
        top: 5%;
        left: 4%;
        z-index: 2;
        color: white;
        mix-blend-mode: difference;
    }

    .img-foreground {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        // No pongo más porque ya está definido en img {widht y height 100%}
    }

    > svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .st0 {
            fill: none;
            stroke-width: 0.5;
            stroke-miterlimit: 10;
        }
        .st1 {
            fill: none;
            stroke-width: 0.3;
            stroke-miterlimit: 10;
        }
        .st2 {
            fill: none;
        }
        .st3 {
            fill: none;
            stroke-width: 0.5;
            stroke-miterlimit: 10;
        }
        .st4 {
            fill: none;
            stroke-width: 0.35;
            stroke-miterlimit: 10;
        }
        .st5 {
            stroke-width: 0.35;
            stroke-miterlimit: 10;
        }
        .st6 {
            stroke-width: 0.35;
            stroke-miterlimit: 10;
        }
    }

    > .fondo {
        mix-blend-mode: multiply;
        z-index: 1;

        .st0,
        .st1,
        .st3,
        .st4 {
            stroke: #bdbdbd;
        }
        .st5,
        .st6 {
            fill: #bdbdbd;
            stroke: #bdbdbd;
        }
    }

    > .plano {
        mix-blend-mode: overlay;
        z-index: 2;

        .st0,
        .st1,
        .st3,
        .st4 {
            stroke: ${({ selectedColor }) => selectedColor || '#000'};
        }
        .st5,
        .st6 {
            fill: ${({ selectedColor }) => selectedColor || '#000'};
            stroke: ${({ selectedColor }) => selectedColor || '#000'};
        }
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
