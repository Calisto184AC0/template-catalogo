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
}) => {
    const handleClick = () => {
        if (primerPlano) {
            closeMenu()

            if (Array.isArray(primerPlano)) {
                setRotador(primerPlano)
                primerPlano[indexRotador]().then(
                    res => (foregroundImgRef.current.src = res.default)
                )
            } else {
                foregroundImgRef.current.src = primerPlano
            }
        } else {
            changeMenu(idMenu)
        }
    }

    return (
        <StyledSelector onClick={handleClick}>
            <img src={selectorImg} alt={'Selector ' + titulo} />
            <span>{titulo}</span>
        </StyledSelector>
    )
}

export default Selector
