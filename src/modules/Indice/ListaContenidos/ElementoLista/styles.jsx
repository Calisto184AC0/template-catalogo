import styled from 'styled-components'
import { COLORS, TextMedium } from '../../../../global/GlobalStyles'

const StyledElementoLista = styled.li`
    a {
        display: block;

        border-top: 1px solid ${COLORS.gray01};
        padding: 0.625rem 0;

        text-decoration: none;
        color: ${COLORS.gray01};
        ${TextMedium}
    }
`

export default StyledElementoLista
