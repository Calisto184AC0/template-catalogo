import styled, { css } from 'styled-components'
import { GRID, TextMedium, COLORS } from '../../global/GlobalStyles'
import { column_5_span6 } from '../../styles/grid'
import { mediaQueryTablet } from '../../styles/sizes'
import StyledSublista from './Sublista/styles'

const StyledListaContenidos = styled.nav`
    ${column_5_span6}

    counter-reset: counter -1;

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

        ${mediaQueryTablet(css`
            ::before {
                content: '';
                display: none;
            }
        `)}
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
