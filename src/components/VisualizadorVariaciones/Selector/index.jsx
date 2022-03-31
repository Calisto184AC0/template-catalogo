import StyledSelector from './styles'

const Selector = ({
    selectorImg,
    titulo,
    closeMenu,
    primerPlano,
    foregroundImgRef,
    idMenu,
    changeMenu,
}) => {
    const handleClick = () => {
        if (primerPlano) {
            closeMenu()
            foregroundImgRef.current.src = primerPlano
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
