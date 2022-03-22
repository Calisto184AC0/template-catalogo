import styled from 'styled-components'
import { COLORS, DISTANCES } from '../global/GlobalStyles'

const DIAMETER = DISTANCES.small

const Indicador = styled.div`
    position: absolute;
    top: ${props => props.top || '0px'};
    left: ${props => props.left || '0px'};

    width: ${DIAMETER};
    height: ${DIAMETER};

    border-radius: calc(${DIAMETER} / 2);

    background-color: ${COLORS.gray08};
`

export default Indicador
