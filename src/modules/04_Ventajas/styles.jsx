import styled from 'styled-components'
import StyledImageWithCaption from '../../components/ImageWithCaption/styles'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import {
    Column4,
    Column6,
    DISTANCES,
    TextMedium,
} from '../../global/GlobalStyles'
import check from '../../assets/icons/check.svg'

const StyledVentajas = styled(Seccion)`
    row-gap: ${DISTANCES.medium};

    ${Text} {
        ${Column4}
    }

    > ul {
        ${Column6}
        ${TextMedium}

        li {
            display: flex;
            justify-content: space-between;

            border-top: 1px solid black;
            padding: ${DISTANCES.small} 0;

            ::after {
                content: url('${check}');
            }
        }
    }
`

export default StyledVentajas
