import { Link } from 'react-router-dom'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import { StyledIndice } from '../../modules/02_Indice/styles'
import Final from '../../modules/EN/10_Final'

const MainEn = () => {
    return (
        <>
            <StyledIndice backgroundColor={COLORS.gray08}>
                <Titulo color={COLORS.gray01}>DOLCKER</Titulo>
                <MenuLanzadera en />
                <div className='idiomas'>
                    <Link to='/'>ES</Link>
                    <Link to='/en' className='seleccionado'>
                        EN
                    </Link>
                </div>
            </StyledIndice>
            <Final invert />
        </>
    )
}

export default MainEn
