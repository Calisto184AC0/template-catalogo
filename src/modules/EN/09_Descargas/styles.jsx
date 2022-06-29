import styled from 'styled-components'
import Seccion from '../../../components/Seccion'
import { column_5_span8, downloadLayout } from '../../../styles/grid'

const StyledDescargas = styled(Seccion)`
    min-height: 100vh;
    align-items: flex-start;

    .download-container {
        ${downloadLayout}

        ${column_5_span8}
    }
`

export default StyledDescargas
