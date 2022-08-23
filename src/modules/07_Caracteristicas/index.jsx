import ImageWithCaption from '../../components/ImageWithCaption'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import StyledCaracteristicas from './styles'
import caracter1 from '../../assets/images/Caracteristicas/caracteristicas_01.webp'
import caracter2 from '../../assets/icons/caracteristicas/caracteristicas_02.svg'
import caracter3 from '../../assets/icons/caracteristicas/caracteristicas_03.svg'
import Text from '../../components/Text'
import Listado from '../../components/Listado'

const Caracteristicas = ({ id }) => {
    return (
        <>
            <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>Características técnicas</Titulo>
                <ImageWithCaption
                    src={caracter1}
                    alt='características técnicas imagen'
                    columnSpan='6'
                />
                <Text>
                    DOLCKER es un material compacto, resistente y caracterizado
                    por una porosidad casi inexistente y, por absorción del agua
                    menor al 0,1 %
                    <br />
                    <br />
                    Su estructura vitrificada, con un grado bajo de porosidad,
                    garantiza una elevada impermeabilidad a suciedad y al hielo.
                    <br />
                    <br />
                    Cuerpo full&body
                    <br />
                    <br />
                    Las ventajas de un material único.
                </Text>
                <Listado>
                    <li>
                        <strong>
                            Amplia gama de colores, formatos, espesores y
                            acabados.
                        </strong>
                    </li>
                    <li>
                        <strong>Es antiácido.</strong> Es insensible a los
                        ácidos más difundidos (No resiste al ataque del ácido
                        fluorhídrico).
                    </li>
                    <li>
                        <strong>Es resistente.</strong> Resistente a la abrasión
                        y al desgaste más que cualquier material natural.
                    </li>
                    <li>
                        <strong>No combustible.</strong> El material no se quema
                        ni produce gases o humos tóxico-nocivos en caso de
                        incendio o exposición a las llamas.
                    </li>
                    <li>
                        <strong>
                            No retiene sustancias orgánicas y bacterias, causa
                            de alergias y disturbios.
                        </strong>
                    </li>
                    <li>
                        <strong>Fácil de trabajar.</strong> El producto se
                        presta a ser trabajado (cortado, perforado, etc.) como
                        la piedra natural para satisfacer cualquier tipo de
                        personalización.
                    </li>
                    <li>
                        <strong>Es Inatacable.</strong> Ningún problema con
                        ollas calientes o cigarrillos encendidos, que al
                        contrario dañan la madera, laminados plásticos o
                        aglomerados con resinas.
                    </li>
                    <li>
                        <strong>Fácil de limpiar.</strong> Es posible utilizar
                        detergentes muy fuertes o disolventes sin el peligro de
                        dañar el material.
                    </li>
                    <li>
                        <strong>Resistente al hielo.</strong> El material es
                        resistente al frío y al hielo.
                    </li>
                    <li>
                        <strong>Establo cromático.</strong> Los colores son
                        totalmente estables y no se alteran ni por la exposición
                        al sol, ni a los agentes atmosféricos, ni al smog.
                    </li>
                </Listado>
                <Text>
                    <strong>ECOLÓGICO</strong>
                    <br />
                    <br />
                    No contiene impermeabilizantes químicos, barnices o resinas,
                    no emite exhalaciones tampoco con el calor de una llama. Al
                    contrario de algunas piedras naturales no emana Radon u
                    otros gases radioactivos y no viene pulido con plomo. Se
                    produce respetando el medio ambiente.
                    <br />
                    <br />
                    <strong>
                        RESISTENCIA A LOS CAMBIOS BRUSCOS DE TEMPERATURA
                    </strong>
                    <br />
                    <br />
                    <strong>
                        RESISTENCIA A LA FLEXIÓN CON CARGAS FIJAS Y ESTÁTICAS
                    </strong>
                    <br />
                    <br />
                    <strong>
                        RESISTENCIA AL IMPACTO, A LA ABRASIÓN SEGURIDAD
                    </strong>
                </Text>
                <Listado>
                    <li>Expansión por humedad insignificante</li>
                    <li>Incombustible</li>
                    <li>Ignífugo</li>
                    <li>Ausencia de peligro en caso de incendio</li>
                    <li>Seguridad eléctrica</li>
                </Listado>
                <Text>
                    <strong>SALUD Y BIENESTAR</strong>
                </Text>
                <Listado>
                    <li>Carencia de olor propio o adquirido</li>
                    <li>Resistencia a la liberación de polvo propio</li>
                    <li>Facilidad de limpieza de polvo adquirido</li>
                    <li>Fácil limpieza y mantenimiento</li>
                    <li>
                        Es un producto que, por su capacidad de aislante
                        eléctrico, evita la captación de polvo ambiental
                        eléctricamente activo
                    </li>
                    <li>Adecuado donde el uso de agua es abundante</li>
                    <li>
                        Es la instalación definitiva: no necesita ningún
                        mantenimiento después de su puesta en obra
                    </li>
                </Listado>
            </StyledCaracteristicas>
            <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray01}>
                <Titulo>Datos técnicos</Titulo>
                <ImageWithCaption
                    src={caracter2}
                    alt='características dimensionales y mecanicas'
                    columnSpan='6'
                />
                <Text>
                    <strong>CARACTERÍSTICAS FÍSICAS Y MECÁNICAS</strong>
                    <br />
                    <br />
                    Las piezas de cerámica se clasifican como baldosas cerámicas
                    prensadas en seco con baja absorción de agua según norma
                    UNE-EN 14411, con las siguientes características declaradas
                    por el fabricante:
                </Text>
                <ImageWithCaption
                    src={caracter3}
                    alt='características higiencias y normas complementarias'
                    columnSpan='6'
                />
            </StyledCaracteristicas>
        </>
    )
}

export default Caracteristicas
