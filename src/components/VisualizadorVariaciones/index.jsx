import { useEffect } from 'react'
import useIndicadoresVariaciones from '../../hooks/useIndicadoresVariaciones'
import Menu from './Menu'
import StyledVisualizadorVariaciones from './styles'

const VisualizadorVariaciones = ({ config, srcfondo, altFondo }) => {
    const {
        capas,
        indicadores,
        selectores,
        seleccionado,
        isOpen,
        closeMenu,
        idMenu,
        changeSeleccionado,
    } = useIndicadoresVariaciones(config)

    const handleClick = e => {
        if (e.target.className === 'indicadores') {
            closeMenu()
        }
    }

    return (
        <StyledVisualizadorVariaciones>
            <img src={srcfondo} alt={altFondo} />
            {capas}
            <div className='indicadores' onClick={handleClick}>
                {indicadores}
            </div>
            <Menu
                selectores={selectores}
                seleccionado={seleccionado}
                isOpen={isOpen}
                idMenu={idMenu}
                changeSeleccionado={changeSeleccionado}
            />
        </StyledVisualizadorVariaciones>
    )
}

export default VisualizadorVariaciones
