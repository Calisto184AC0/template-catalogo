import { useEffect, useState } from 'react'
import useConfigRotador from '../../hooks/useConfigRotador'
import Menu from '../VisualizadorVariaciones/Menu'
import StyledVisualizadorRotador from './styles'

const VisualizadorRotador = ({ config }) => {
    const {
        currentRef,
        fondoAlt,
        indicadores,
        selectores,
        seleccionado,
        isOpen,
        closeMenu,
        idMenu,
        changeSeleccionado,
        setIndexRotador,
    } = useConfigRotador(config)

    const [isMouseDown, setIsMouseDown] = useState(false)
    const [initPos, setInitPos] = useState(0)

    const handleClick = e => {
        if (e.target.className === 'indicadores') {
            closeMenu()
        }
    }

    const initDrag = ({ clientX }) => {
        setIsMouseDown(() => {
            setInitPos(clientX)
            return true
        })
    }

    const handleMouseMove = ({ clientX }) => {
        if (isMouseDown) {
            if (clientX - initPos > 25) {
                setIndexRotador(prevIndex => {
                    setInitPos(clientX)
                    return prevIndex - 1
                })
            } else if (clientX - initPos < -25) {
                setIndexRotador(prevIndex => {
                    setInitPos(clientX)
                    return prevIndex + 1
                })
            }
        }
    }

    return (
        <StyledVisualizadorRotador>
            <img src='' alt={fondoAlt} ref={currentRef} />
            <div
                className='indicadores'
                onClick={handleClick}
                onMouseDown={initDrag}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsMouseDown(false)}
                onMouseLeave={() => setIsMouseDown(false)}
            >
                {indicadores}
            </div>
            <Menu
                selectores={selectores}
                seleccionado={seleccionado}
                isOpen={isOpen}
                idMenu={idMenu}
                changeSeleccionado={changeSeleccionado}
            />
        </StyledVisualizadorRotador>
    )
}

export default VisualizadorRotador
