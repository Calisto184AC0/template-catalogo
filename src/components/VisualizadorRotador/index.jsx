import { useState } from 'react'
import useConfigRotador from '../../hooks/useConfigRotador'
import Menu from '../VisualizadorVariaciones/Menu'
import StyledVisualizadorRotador from './styles'

const VisualizadorRotador = ({ config, isDesplazador }) => {
    const {
        actualTitulo,
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
    } = useConfigRotador(config, isDesplazador)

    const [isMouseDown, setIsMouseDown] = useState(false)
    const [initPos, setInitPos] = useState(0)

    const handleClick = e => {
        if (e.target.className === 'indicadores') {
            closeMenu()
        }
    }

    const initDragMobile = ({ touches }) => {
        setIsMouseDown(() => {
            setInitPos(touches[0].clientX)
            return true
        })
    }

    const initDrag = ({ clientX }) => {
        setIsMouseDown(() => {
            setInitPos(clientX)
            return true
        })
    }

    const movement = posX => {
        if (isMouseDown) {
            if (isDesplazador) {
                if (posX - initPos > 70) {
                    setIndexRotador(prevIndex => {
                        setInitPos(posX)
                        return prevIndex + 1
                    })
                } else if (posX - initPos < -70) {
                    setIndexRotador(prevIndex => {
                        setInitPos(posX)
                        return prevIndex - 1
                    })
                }
            } else {
                if (posX - initPos > 25) {
                    setIndexRotador(prevIndex => {
                        setInitPos(posX)
                        return prevIndex - 1
                    })
                } else if (posX - initPos < -25) {
                    setIndexRotador(prevIndex => {
                        setInitPos(posX)
                        return prevIndex + 1
                    })
                }
            }
        }
    }

    const handleMouseMove = ({ clientX }) => {
        movement(clientX)
    }

    const handleTouchMove = ({ touches }) => {
        const posX = touches[0].clientX

        movement(posX)
    }

    return (
        <StyledVisualizadorRotador>
            <img src='' alt={fondoAlt} ref={currentRef} />
            <span>{actualTitulo}</span>
            <div
                className='indicadores'
                onClick={handleClick}
                onMouseDown={initDrag}
                onTouchStart={initDragMobile}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseUp={() => setIsMouseDown(false)}
                onMouseLeave={() => setIsMouseDown(false)}
                onTouchEnd={() => setIsMouseDown(false)}
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
