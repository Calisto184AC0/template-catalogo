import styled, { css } from 'styled-components'
import Seccion from '../../components/Seccion'
import { mediaQueryTablet } from '../../styles/sizes'

const Container = styled.div`
    //min-height: 100vh; // TODO: Cuando el índice es más alto que el viewport hace cosas raras
    width: 100%;
    min-height: ${props => {
        if (props.actualHeight === 0) {
            return '100vh'
        } else {
            return props.actualHeight + 'px'
        }
    }};
`

const StyledIndice = styled(Seccion)`
    min-height: 100vh;
    width: 100%;
    overflow-y: hidden;

    .flecha-indice {
        width: 25px;
        grid-column: 5;
        align-self: flex-end;
        cursor: pointer;

        ${mediaQueryTablet(css`
            display: none;
        `)}
    }
`

export { StyledIndice, Container }
