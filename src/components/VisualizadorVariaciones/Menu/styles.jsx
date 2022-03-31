import styled from 'styled-components'
import { COLORS, DISTANCES } from '../../../global/GlobalStyles'

const StyledMenu = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 0.625rem;

    padding: 0 ${DISTANCES.small};

    background-color: ${COLORS.gray01};
    opacity: 0;
    visibility: hidden;

    transition: visibility 0.3s, opacity 0.3s;

    ${props => props.moreStyles}

    > img {
        cursor: pointer;
    }

    .menu-container {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: ${DISTANCES.small};
        overflow-x: scroll;
        overflow-y: hidden;

        padding: ${DISTANCES.small};

        scroll-behavior: smooth;
    }
`

export default StyledMenu
