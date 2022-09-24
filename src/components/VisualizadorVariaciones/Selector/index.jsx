import StyledSelector, { StyledSelectorLabel } from './styles'

const Selector = ({
    quitarFondo,
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
    setAnotherElement,
    colorPicker,
    setSelectedColor,
}) => {
    const handleClick = () => {
        if (noClick) return

        if (primerPlano !== undefined) {
            closeMenu()

            setActualTitulo(titulo)

            if (Array.isArray(primerPlano)) {
                setRotador(primerPlano)
                foregroundImgRef.current.src = primerPlano[indexRotador]
            } else {
                if (typeof primerPlano === 'string') {
                    foregroundImgRef.current.src = primerPlano
                    setAnotherElement()
                } else {
                    foregroundImgRef.current.src = primerPlano.bg
                    setAnotherElement(primerPlano.another)
                }
            }
        } else {
            changeMenu(idMenu)
        }
    }

    if (colorPicker) {
        return (
            <StyledSelectorLabel onClick={handleClick}>
                <img src={selectorImg} alt={'Selector ' + titulo} />
                <span>{titulo}</span>
                <input
                    type='color'
                    onChange={({ target }) => setSelectedColor(target.value)}
                    value='#3c0000'
                />
            </StyledSelectorLabel>
        )
    }

    return (
        <StyledSelector
            onClick={handleClick}
            noClick={noClick}
            quitarFondo={quitarFondo}
        >
            <img src={selectorImg} alt={'Selector ' + titulo} />
            <span>{titulo}</span>
        </StyledSelector>
    )
}

export default Selector
