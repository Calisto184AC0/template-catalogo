import styled from 'styled-components'
import { TextExtraLarge, TextMedium } from '../../global/GlobalStyles'
import StyledCita from './styles'

const BigCita = styled.p`
    ${TextExtraLarge}
    font-weight: bold;
`

const NormalCita = styled.p`
    ${TextMedium}
    font-weight: bold;
`

const AuthorText = styled.p`
    ${TextMedium}
`

const Cita = ({ cita, author, big, colorCita, colorAutor }) => {
    return (
        <StyledCita>
            {big ? (
                <BigCita color={colorCita}>{cita}</BigCita>
            ) : (
                <NormalCita color={colorCita}>{cita}</NormalCita>
            )}
            <AuthorText color={colorAutor}>{author}</AuthorText>
        </StyledCita>
    )
}

export default Cita
