import styled, { css } from 'styled-components'
import Seccion from '../../components/Seccion'
import { mediaQueryTablet } from '../../styles/sizes'

const StyledIndice = styled(Seccion)`
    min-height: 100vh;

    .flecha-indice {
        width: 25px;
        grid-column: 5;
        align-self: flex-end;
        cursor: pointer;
        ${mediaQueryTablet(css`
            display: none;
        `)}
    }
`

export { StyledIndice }
