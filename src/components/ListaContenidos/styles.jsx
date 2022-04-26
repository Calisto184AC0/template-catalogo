import styled from 'styled-components'
import {
    GRID,
    TextMedium,
    COLORS,
    Column6,
    TABLET_SIZE,
} from '../../global/GlobalStyles'
import StyledSublista from './Sublista/styles'

const StyledListaContenidos = styled.nav`
    ${Column6}

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 2 / -1;
    }

    counter-reset: counter;

    > ul > * {
        position: relative;

        &::before {
            content: counter(counter, decimal-leading-zero);
            counter-increment: counter;

            position: absolute;
            right: calc(100% + ${GRID.columnGap});

            border-top: 1px solid transparent; // para que tenga el mismo tamaño que el a de StyledElementoLista
            padding: 0.625rem 0;

            color: ${COLORS.gray01};
            ${TextMedium}
        }
    }

    > ul > ${StyledSublista} {
        grid-template-columns: repeat(6, 1fr);

        > ul > ${StyledSublista} {
            grid-template-columns: repeat(5, 1fr);

            > ul > ${StyledSublista} {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
`

export default StyledListaContenidos
