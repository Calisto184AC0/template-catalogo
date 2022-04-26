import styled from 'styled-components'
import { DISTANCES, GridLayout, TABLET_SIZE } from '../global/GlobalStyles'
import Anotaciones from './Anotacion/Anotaciones'
import StyledAnotacion from './Anotacion/styles'
import StyledImageWithCaption from './ImageWithCaption/styles'
import { Titulo, Titulo2, Titulo3 } from './Titulos'

const Seccion = styled.section`
    ${GridLayout}
    grid-template-columns: repeat(12, 1fr);

    padding: ${DISTANCES.long} ${DISTANCES.medium};

    background-color: ${props => props.backgroundColor || 'transparent'};

    ${Titulo}, ${Titulo2}, ${Titulo3} {
        grid-column: 1 / span 2;
    }

    @media (max-width: ${TABLET_SIZE}) {
        ${Titulo}, ${Titulo2}, ${Titulo3} {
            grid-row-start: 1;
            grid-column: 1 / -1;
        }

        > ${StyledImageWithCaption} {
            grid-column: 1 / -1 !important;
        }
    }

    > ${StyledImageWithCaption} {
        grid-column: 5 / span 6;
    }

    > ${Anotaciones}, > ${StyledAnotacion} {
        grid-column: 3 / span 2;
        align-self: flex-end;
    }
`

export default Seccion
