import { useState } from 'react'
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
    colorPicker,
}) => {
    const [selectedColor, setSelectedColor] = useState('#000000')

    const handleClick = () => {
        if (noClick) return

        if (primerPlano !== undefined) {
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

    const handleColorChange = color => {
        setSelectedColor(color)
        console.log('solo un cambio', color)
    }

    if (colorPicker) {
        return (
            <StyledSelectorLabel>
                <img src={selectorImg} alt={'Selector ' + titulo} />
                <span>{titulo}</span>
                <input
                    type='color'
                    onChange={({ target }) => handleColorChange(target.value)}
                    value={selectedColor}
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
