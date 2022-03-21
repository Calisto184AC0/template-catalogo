import styled from 'styled-components'
import { TextLarge } from '../global/GlobalStyles'

const Titulo = styled.h2`
    ${TextLarge}
    font-weight: bold;
    text-transform: uppercase;
`

const Titulo2 = styled.h3`
    ${TextLarge}
    font-weight: bold;
`

const Titulo3 = styled.h4`
    ${TextLarge}
    font-weight: normal;
`

export { Titulo, Titulo2, Titulo3 }
