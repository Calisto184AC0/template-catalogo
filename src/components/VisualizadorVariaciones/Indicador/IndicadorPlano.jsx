import styled from 'styled-components'

const IndicadorPlano = styled.div`
    position: absolute;
    left: ${({ x1 }) => x1};
    top: ${({ y1 }) => y1};
    width: ${({ x1, x2 }) => `${parseFloat(x2) - parseFloat(x1)}%`};
    height: ${({ y1, y2 }) => `${parseFloat(y2) - parseFloat(y1)}%`};

    cursor: pointer;

    transition: all 0.2s linear;

    background-color: ${({ isSelected }) =>
        isSelected ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};

    :hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

export default IndicadorPlano
