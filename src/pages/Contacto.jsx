import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/Seccion'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'

const Contacto = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )
    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion fullScreen>
                <Titulo2>Contacto</Titulo2>
                <Text>
                    DOLCKER SISTEMAS, S.L.
                    <br />
                    Calle Talamanca del Jarama, 19 portal A 5A
                    <br />
                    28051 Madrid (España)
                    <br />
                    (+34) 902 363 725
                    <br />
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default Contacto
