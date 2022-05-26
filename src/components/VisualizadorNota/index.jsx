import useIndicadoresNota from '../../hooks/useIndicadoresNota'
import VisualizadorWithAnotacion from '../VisualizadorWithAnotacion'
import StyledVisualizadorNota from './styles'

const VisualizadorNota = ({
    type,
    text,
    indicadores = [],
    imgBackground,
    alt = '',
}) => {
    const { listaIndicadores, containerRef, textRef, title, piezaImgSrc } =
        useIndicadoresNota(indicadores)

    return (
        <VisualizadorWithAnotacion type={type} text={text}>
            <StyledVisualizadorNota>
                <img src={imgBackground} alt={alt} />
                <div className='indicadores-container'>{listaIndicadores}</div>
                <div className='visualizador-nota-container' ref={containerRef}>
                    <img src={piezaImgSrc} alt='Pieza' />
                    <p className='visualizador-nota' ref={textRef}>
                        {title}
                    </p>
                </div>
            </StyledVisualizadorNota>
        </VisualizadorWithAnotacion>
    )
}

export default VisualizadorNota
