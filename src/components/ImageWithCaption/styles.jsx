import styled from 'styled-components'
import { COLORS, DISTANCES, TextSmall } from '../../global/GlobalStyles'
import {
    column_5_span4,
    column_5_span6,
    column_5_span8,
} from '../../styles/grid'

const StyledImageWithCaption = styled.figure`
    display: flex;
    flex-direction: column;
    gap: ${DISTANCES.small};

    ${props => {
        if (props.columnSpan === '8') return column_5_span8
        else if (props.columnSpan === '6') return column_5_span6
        else if (props.columnSpan === '4') return column_5_span4
    }}

    figcaption {
        ${TextSmall}
        text-align: left;
        color: ${COLORS.gray05};
    }
`

export default StyledImageWithCaption
