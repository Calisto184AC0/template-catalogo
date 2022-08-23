import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegableEn from '../../hooks/useMenuDesplegableEn'
import Final from '../../modules/EN/10_Final'

import img1 from '../../assets/images/QuienesSomos/DSC_6195.jpg'
import img2 from '../../assets/images/QuienesSomos/DSC_6221.jpg'
import img3 from '../../assets/images/QuienesSomos/DSC_6303.jpg'
import ImageWithCaption from '../../components/ImageWithCaption'

const QuienesSomos = () => {
    const { menuDesplegable, btnIndice } = useMenuDesplegableEn(
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
                    Collaborating directly with architects and designers so that
                    they can bring their projects to the forefront of
                    sustainable construction is found in Dolcker&#39;s DNA.
                    <br />
                    <br />
                    Our strentgh is the development of innovative and high
                    performance ventilated facades. These facades are found in
                    some of the most suggestive buildings in the world.
                    <br />
                    <br />
                    From our research and development laboratories, we are
                    constantly experimenting and developing new materials and
                    production processes. We do everything to guarantee that our
                    products meet the strictest requirements in both design and
                    quality.
                    <br />
                    <br />
                    Our firm commitment to the quality of our products makes us
                    worthy of the trust of a large number of architects,
                    installers and clients.
                </Text>
                <ImageWithCaption
                    src={img1}
                    alt='Imagen de Aplicaciones 1'
                    columnSpan='6'
                />
                <ImageWithCaption
                    src={img2}
                    alt='Imagen de Aplicaciones 1'
                    columnSpan='3'
                />
                <ImageWithCaption
                    src={img3}
                    alt='Imagen de Aplicaciones 1'
                    style={{
                        gridColumn: 'span 3',
                    }}
                />
            </Seccion>
            <Final />
        </>
    )
}

export default QuienesSomos
