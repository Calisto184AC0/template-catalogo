import styled, { css } from 'styled-components'
import { DISTANCES, GRID, TextSmall } from '../../global/GlobalStyles'
import { column_3_span2 } from '../../styles/grid'
import { mediaQueryTablet } from '../../styles/sizes'

const StyledAnotacion = styled.div`
    ${column_3_span2}

    display: flex;
    align-items: flex-end;

    position: relative;
    padding-bottom: 1rem;

    ${TextSmall}

    cursor: ${({ onClick }) => (onClick !== undefined ? 'pointer' : 'default')};

    img {
        position: absolute;
        right: calc(100% + ${GRID.columnGap});

        min-width: 25px;
        width: auto;
        max-height: calc(2 * ${DISTANCES.small});
    }

    ${mediaQueryTablet(css`
        gap: ${GRID.columnGap};
        padding-bottom: 0 !important;

        img {
            position: relative;
            right: auto;
        }
    `)}
`

export default StyledAnotacion
