import styled from 'styled-components'
import { COLORS, TextExtraLarge, TextMedium } from '../../global/GlobalStyles'
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
    color: ${COLORS.gray03};
`

const Cita = ({ cita, author, big, color }) => {
    return (
        <StyledCita>
            {big ? (
                <BigCita color={color}>{cita}</BigCita>
            ) : (
                <NormalCita color={color}>{cita}</NormalCita>
            )}
            <AuthorText>{author}</AuthorText>
        </StyledCita>
    )
}

export default Cita
