import styled from 'styled-components'
import StyledAnotacion from './styles'

const Anotaciones = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-bottom: 1rem;

    ${StyledAnotacion} {
        padding-bottom: 0;
        flex: 1 1 $img-height;
    }
`

export default Anotaciones
