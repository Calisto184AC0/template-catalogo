import { useEffect } from 'react'
import ListaContenidos from '../../components/ListaContenidos'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import { StyledIndice } from './styles'
import flecha from '../../assets/icons/flechita.svg'
import scrollTo from '../../helpers/scrollTo'
import useMenuDesplegable from '../../hooks/useMenuDesplegable'

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
            <StyledIndice backgroundColor={COLORS.gray08} ref={indiceRef}>
                <Titulo color={COLORS.gray01}>Índice</Titulo>
                <ListaContenidos />
                <img
                    src={flecha}
                    alt=''
                    className='flecha-indice'
                    onClick={handleClickFlecha}
                />
                <div className='idiomas'>
                    <a href='#' className='seleccionado'>
                        ES
                    </a>
                    <a href='/en'>EN</a>
                </div>
            </StyledIndice>
            {menuDesplegable}
            {btnIndice}
        </>
    )
}

export default Indice
