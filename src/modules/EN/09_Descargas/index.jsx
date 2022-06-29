import { Titulo } from '../../../components/Titulos'
import configDescargas from '../../../configs/EN/configDescargas'
import { COLORS } from '../../../global/GlobalStyles'
import useDescargas from '../../../hooks/useDescargas'
import StyledDescargas from './styles'

const Descargas = ({ id }) => {
    const descargas = useDescargas(configDescargas)

    return (
        <StyledDescargas id={id} backgroundColor={COLORS.gray03}>
            <Titulo>Downloads</Titulo>
            <div className='download-container'>{descargas}</div>
        </StyledDescargas>
    )
}

export default Descargas
