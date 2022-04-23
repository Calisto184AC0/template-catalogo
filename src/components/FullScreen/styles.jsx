import styled from 'styled-components'

const StyledFullScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;

    .muestraFondo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .closeFullScreen {
        width: 3rem;
        position: absolute;
        top: 10%;
        left: 90%;
        cursor: pointer;
    }
`

export default StyledFullScreen
