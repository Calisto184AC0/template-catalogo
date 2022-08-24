import { useEffect } from 'react'
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
    setAnotherElement,
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
                if (typeof primerPlano === 'string') {
                    foregroundImgRef.current.src = primerPlano
                } else {
                    foregroundImgRef.current.src = ''
                    setAnotherElement(primerPlano)
                }
            }
        } else {
            changeMenu(idMenu)
        }
    }

    useEffect(() => {
        if (colorPicker === undefined) return
    }, [selectedColor])

    const handleColorChange = (color = selectedColor) => {
        // closeMenu()

        // setActualTitulo(titulo)
        // foregroundImgRef.current.src = primerPlano

        setSelectedColor(color)
    }

    if (colorPicker) {
        return (
            <StyledSelectorLabel onClick={handleClick}>
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
