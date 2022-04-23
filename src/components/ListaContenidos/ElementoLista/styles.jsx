import styled from 'styled-components'
import { COLORS, TextMedium } from '../../../global/GlobalStyles'

const StyledElementoLista = styled.li`
    a {
        display: flex;

        border-top: 1px solid ${COLORS.gray01};

        text-decoration: none;
        color: ${COLORS.gray01};
        ${TextMedium}

        span {
            padding: 0.625rem 0;
            display: block;
            transition: all 0.2s linear;
        }

        :hover {
            span {
                transform: translateX(20px);
            }
        }
    }
`

export default StyledElementoLista
