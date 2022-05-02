import StyledIndicador from './styles'
import openIndicador from '../../../assets/icons/open-indicator.svg'
import { useContext } from 'react'
import IsOpenContext from '../../../contexts/IsOpenMenuContext'

const Indicador = ({
    top,
    left,
    bottom,
    idMenu,
    changeMenu,
    openMenu,
    closeMenu,
}) => {
    const isOpen = useContext(IsOpenContext)

    const handleClick = () => {
        if (isOpen) {
            closeMenu()
        } else {
            openMenu()
            changeMenu(idMenu)
        }
    }

    const position = {
        Y: top,
        X: left,
        Bottom: bottom,
    }

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
                style={{ transform: 'rotate(-45deg)' }}
            />
        )
    }
}

export default Indicador
