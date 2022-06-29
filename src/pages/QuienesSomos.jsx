import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/Seccion'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'

const QuienesSomos = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        'Dolcker'
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion style={{ minHeight: '100vh' }}>
                <Titulo2>Quiénes somos</Titulo2>
                <Text>
                    Dolcker trabaja con arquitectos y diseñadores para llevar
                    sus proyectos a la vanguardia de la construcción sostenible.
                    <br />
                    <br />
                    Nuestro punto fuerte es el desarrollo de fachadas ventiladas
                    innovadoras y de alto rendimiento. Éstas se encuentran en
                    algunos de los edificios más llamativos del mundo. En
                    nuestros laboratorios de investigación y desarrollo,
                    experimentamos y probamos constantemente nuevos materiales,
                    técnicas de cocción y procesos de producción. Esto nos
                    permite garantizar que nuestros productos cumplen los
                    requisitos más estrictos de diseño y calidad.
                    <br />
                    <br />
                    Nuestra apuesta decidida por la calidad de nuestros
                    productos nos ha hecho merecedores de la confianza de miles
                    de arquitectos, colocadores y clientes.
                    <br />
                    <br />
                    En el Adn de Dolcker se encuentra el colaborar de una manera
                    directa con arquitectos y diseñadores para que puedan llevar
                    sus proyectos a la vanguardia de la construcción sostenible.
                    <br />
                    <br />
                    Nuestro punto fuerte es el desarrollo de fachadas ventiladas
                    innovadoras y de alto rendimiento. Dichas fachadas se
                    encuentran en algunos de los edificios más sugerentes del
                    mundo.
                    <br />
                    <br />
                    Desde nuestros laboratorios de investigación y desarrollo,
                    nos encontramos en una constante experimentación y
                    desarrollo de nuevos materiales, técnicas de cocción y
                    procesos de producción. Todo para garantizar que nuestro
                    productos cumplen los requisitos más estrictos tanto en
                    diseño como en calidad.
                    <br />
                    <br />
                    Nuestra apuesta decidida por la calidad de nuestros
                    productos nos hace merecedores de la confianza de un gran
                    número de arquitectos, colocadores y clientes.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default QuienesSomos
