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
                    Calle Talamanca del Jarama, 19
                    <br />
                    28051 Madrid (España)
                    <br />
                    (+34) 902 363 725
                    <br />
                    <br />
                    <a href='mailto:administracion@dolcker.es'>
                        administracion@dolcker.es
                    </a>
                    <br />
                    <a href='mailto:comercial@dolcker.es'>
                        comercial@dolcker.es
                    </a>
                    <br />
                    <a href='mailto:dolcker@dolcker.es'>dolcker@dolcker.es</a>
                    <br />
                    <a href='mailto:sistemas@dolcker.es'>sistemas@dolcker.es</a>
                    <br />
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default Contacto
