import StyledIndicador from '../Indicador/styles'

const Indicador = ({
    top,
    left,
    desplazador,
    setActualDesplazadorImgs,
    setActualDesplazadorTitulo,
    onClick,
    close,
}) => {
    const position = {
        Y: top,
        X: left,
    }

    const handleClickNormal = () => {
        setActualDesplazadorImgs(desplazador.imgs)
        setActualDesplazadorTitulo(desplazador.titulo)
    }

    const handleClickClose = () => {
        onClick()
    }

    if (close) {
        return (
            <StyledIndicador
                position={position}
                onClick={handleClickClose}
                close
            ></StyledIndicador>
        )
    }

    return (
        <StyledIndicador
            position={position}
            onClick={handleClickNormal}
        ></StyledIndicador>
    )
}

export default Indicador
