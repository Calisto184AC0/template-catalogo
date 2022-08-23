import styled, { css } from 'styled-components'
import { COLORS, TextSmall } from '../global/GlobalStyles'
import {
    column_1_span2,
    column_3_span2,
    column_5_span6,
    seccionLayout,
} from '../styles/grid'
import { mediaQueryTablet } from '../styles/sizes'
import Anotaciones from './Anotacion/Anotaciones'
import StyledAnotacion from './Anotacion/styles'
import StyledImageWithCaption from './ImageWithCaption/styles'
import Text from './Text'
import { Titulo, Titulo2, Titulo3 } from './Titulos'

const Seccion = styled.section`
    ${seccionLayout}

    ${props => (props.fullScreen ? 'min-height: 100vh;' : null)}

    background-color: ${props => props.backgroundColor || COLORS.gray01};

    > ${Titulo}, > ${Titulo2}, > ${Titulo3} {
        align-self: flex-start;
        ${column_1_span2}
    }

    > ${Anotaciones}, > ${StyledAnotacion} {
        ${column_3_span2}
        align-self: flex-end;
    }

    > ${Text} {
        ${column_5_span6}
        ${TextSmall}
    }

    ${mediaQueryTablet(css`
        > ${StyledImageWithCaption} {
            grid-column: 1 / -1 !important;
        }
    `)}
`

export default Seccion
