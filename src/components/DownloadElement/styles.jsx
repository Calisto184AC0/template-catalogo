import styled from 'styled-components'
import { DISTANCES } from '../../styles/sizes'

const StyledDownloadElement = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;

    img {
        margin-bottom: ${DISTANCES.small};
    }

    span {
        line-height: 25px;
    }

    .file-name {
        font-weight: bold;
    }

    .file-info {
        text-transform: uppercase;
    }
`

export default StyledDownloadElement
