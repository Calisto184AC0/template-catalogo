import ListaContenidos from '../../components/ListaContenidos'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import { StyledIndice } from './styles'
import flecha from '../../assets/icons/flechita.svg'
import scrollTo from '../../helpers/scrollTo'
import useMenuDesplegable from '../../hooks/useMenuDesplegable'
import { Link } from 'react-router-dom'

const Indice = ({ indiceRef }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        ListaContenidos,
        'Índice',
        indiceRef
    )

    const handleClickFlecha = () => {
        const position =
            indiceRef.current.offsetHeight + indiceRef.current.offsetTop
        scrollTo(position, 2000)
    }

    return (
        <>
            <StyledIndice
                backgroundColor={COLORS.gray08}
                ref={indiceRef}
                id='indice'
            >
                <Titulo color={COLORS.gray01}>Índice</Titulo>
                <ListaContenidos />
                <img
                    src={flecha}
                    alt=''
                    className='flecha-indice'
                    onClick={handleClickFlecha}
                />
                <div className='idiomas'>
                    <Link to='#' className='seleccionado'>
                        ES
                    </Link>
                    <Link to='/en/catalogos/fachadas-ventiladas'>EN</Link>
                </div>
            </StyledIndice>
            {menuDesplegable}
            {btnIndice}
        </>
    )
}

export default Indice
