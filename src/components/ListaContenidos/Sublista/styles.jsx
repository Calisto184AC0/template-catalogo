import styled from 'styled-components'
import { COLORS, GRID, TextMedium } from '../../../global/GlobalStyles'

const StyledSublista = styled.li`
    display: grid;
    column-gap: ${GRID.columnGap};
    align-items: flex-start;

    > div {
        grid-column: 1 / -1;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top: 1px solid ${COLORS.gray01};

        overflow-x: hidden;

        cursor: pointer;
        color: ${COLORS.gray01};
        ${TextMedium}

        span {
            padding: 0.625rem 0;
            transition: all 0.2s linear;
        }

        img {
            width: 16px;
            transition: all 0.2s linear;
        }

        :hover {
            span {
                transform: translateX(20px);
            }
            .openItemList {
                transform: rotate(90deg);
            }
            .closeItemList {
                transform: rotate(180deg);
            }
        }
    }

    > ul {
        grid-column: 2 / -1;

        max-height: 0px;

        overflow: hidden;

        transition: max-height 0.3s linear;
    }
`

export default StyledSublista
