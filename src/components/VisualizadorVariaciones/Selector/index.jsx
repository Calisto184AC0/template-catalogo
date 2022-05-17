import StyledSelector from './styles'

const Selector = ({
    indexRotador,
    selectorImg,
    titulo,
    closeMenu,
    primerPlano,
    setRotador,
    foregroundImgRef,
    idMenu,
    changeMenu,
    setActualTitulo,
    noClick,
}) => {
    const handleClick = () => {
        if (noClick) return

        if (primerPlano) {
            closeMenu()

            setActualTitulo(titulo)

            if (Array.isArray(primerPlano)) {
                setRotador(primerPlano)
                foregroundImgRef.current.src = primerPlano[indexRotador]
            } else {
                foregroundImgRef.current.src = primerPlano
            }
        } else {
            changeMenu(idMenu)
        }
    }

    return (
        <StyledSelector onClick={handleClick} noClick={noClick}>
            <img src={selectorImg} alt={'Selector ' + titulo} />
            <span>{titulo}</span>
        </StyledSelector>
    )
}

export default Selector
