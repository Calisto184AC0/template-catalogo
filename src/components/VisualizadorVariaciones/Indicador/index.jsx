import StyledIndicador from './styles'
import openIndicador from '../../../assets/icons/open-indicator.svg'
import { useContext } from 'react'
import IsOpenContext from '../../../contexts/IsOpenMenuContext'
import IndicadorPlano from './IndicadorPlano'
import { useListaCambios } from '../../../contexts/MultipleOptionsContext'

const Indicador = ({
    coord,
    top,
    left,
    bottom,
    idMenu,
    changeMenu,
    openMenu,
    closeMenu,
}) => {
    const { listaCambios, pushCambio, removeCambio } = useListaCambios()

    const isOpen = useContext(IsOpenContext)

    const handleClick = () => {
        if (coord) {
            if (listaCambios.includes(idMenu)) {
                if (isOpen) {
                    if (listaCambios.length !== 1) {
                        removeCambio(idMenu)
                    }
                } else {
                    removeCambio(idMenu)
                }
                return
            } else {
                pushCambio(idMenu)
                return
            }
        }

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

    if (coord) {
        return (
            <IndicadorPlano
                onClick={handleClick}
                isSelected={listaCambios.includes(idMenu)}
                {...coord}
            />
        )
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
