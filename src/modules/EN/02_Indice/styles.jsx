import styled, { css } from 'styled-components'
import Seccion from '../../../components/Seccion'
import { TextMedium } from '../../../global/GlobalStyles'
import { mediaQueryTablet } from '../../../styles/sizes'

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

    .idiomas {
        align-self: flex-start;

        grid-column: 12;
        grid-row: 1;
        display: flex;
        gap: 1rem;
        ${TextMedium}

        a {
            color: white;
            text-decoration: none;
        }

        .seleccionado {
            font-weight: bold;
        }

        ${mediaQueryTablet(css`
            grid-column: 1 / -1;
        `)}
    }
`

export { StyledIndice }
