import styled from 'styled-components'
import { COLORS, GRID, TextMedium } from '../../../../global/GlobalStyles'

const StyledSublista = styled.li`
    display: grid;
    column-gap: ${GRID.columnGap};
    align-items: flex-start;

    > span {
        grid-column: 1 / -1;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top: 1px solid ${COLORS.gray01};
        padding: 0.625rem 0;

        cursor: pointer;
        color: ${COLORS.gray01};
        ${TextMedium}
    }

    > ul {
        grid-column: 2 / -1;

        max-height: 0px;

        overflow-y: hidden;

        transition: max-height 0.3s linear;
    }
`

export default StyledSublista
