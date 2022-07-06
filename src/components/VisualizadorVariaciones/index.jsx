import useIndicadoresVariaciones from '../../hooks/useIndicadoresVariaciones'
import Menu from './Menu'
import StyledVisualizadorVariaciones from './styles'
import IsOpenContext from '../../contexts/IsOpenMenuContext'

const VisualizadorVariaciones = ({ config, srcfondo, altFondo }) => {
    const {
        actualTitulo,
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
            {capas.length === 1 ? <span>{actualTitulo}</span> : null}

            <div className='indicadores' onClick={handleClick}>
                <IsOpenContext.Provider value={isOpen}>
                    {indicadores}
                </IsOpenContext.Provider>
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
