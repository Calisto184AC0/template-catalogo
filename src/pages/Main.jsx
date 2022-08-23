import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import { StyledIndice } from '../modules/02_Indice/styles'
import Final from '../modules/10_Final'

const Main = () => {
    return (
        <>
            <StyledIndice backgroundColor={COLORS.gray08}>
                <Titulo color={COLORS.gray01}>DOLCKER</Titulo>
                <MenuLanzadera />
                <div className='idiomas'>
                    <Link to='/' className='seleccionado'>
                        ES
                    </Link>
                    <Link to='/en'>EN</Link>
                </div>
            </StyledIndice>
            <Final invert />
        </>
    )
}

export default Main
