import StyledIndicador from './styles'
import openIndicador from '../../../assets/icons/open-indicator.svg'
import { useEffect } from 'react'

const Indicador = ({ top, left, idMenu, changeMenu, openMenu, isOpen }) => {
    const handleClick = () => {
        openMenu()
        changeMenu(idMenu)
    }

    const position = {
        Y: top,
        X: left,
    }

    useEffect(() => console.log(openMenu), [isOpen])

    if (!isOpen) {
        return (
            <StyledIndicador
                src={openIndicador}
                onClick={handleClick}
                position={position}
            />
        )
    } else {
        return (
            <StyledIndicador
                src={openIndicador}
                onClick={handleClick}
                position={position}
                style={{ transform: 'rotate(45deg)' }}
            />
        )
    }
}

export default Indicador
