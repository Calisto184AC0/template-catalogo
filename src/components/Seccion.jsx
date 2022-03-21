import styled from 'styled-components'
import { DISTANCES, GridLayout } from '../global/GlobalStyles'
import { Titulo, Titulo2, Titulo3 } from './Titulos'

const Seccion = styled.section`
    ${GridLayout}
    grid-template-columns: repeat(12, 1fr);

    padding: ${DISTANCES.long} ${DISTANCES.medium};

    background-color: ${props => props.backgroundColor || 'transparent'};

    ${Titulo}, ${Titulo2}, ${Titulo3} {
        grid-column: 1 / span 2;
    }
`

export default Seccion
