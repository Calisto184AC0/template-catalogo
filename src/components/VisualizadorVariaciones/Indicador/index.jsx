import { useEffect } from 'react'
import StyledIndicador from './styles'

const Indicador = ({ top, left, idMenu, changeMenu, openMenu }) => {
    const handleClick = () => {
        openMenu()
        changeMenu(idMenu)
    }

    const props = {
        top,
        left,
    }

    return <StyledIndicador onClick={handleClick} {...props} />
}

export default Indicador
