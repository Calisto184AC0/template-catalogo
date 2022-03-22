import styled from 'styled-components'
import { COLORS, DISTANCES, TextSmall } from '../../global/GlobalStyles'

const StyledImageWithCaption = styled.figure`
    display: flex;
    flex-direction: column;
    gap: ${DISTANCES.small};

    figcaption {
        ${TextSmall}
        text-align: left;
        color: ${COLORS.gray05};
    }
`

export default StyledImageWithCaption
