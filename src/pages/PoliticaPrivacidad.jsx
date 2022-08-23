import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/Seccion'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'

const PoliticaPrivacidad = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion>
                <Titulo2>Política de privacidad</Titulo2>
                <Text>
                    <strong>POLÍTICA DE PRIVACIDAD DE www.dolcker.es</strong>
                    <br />
                    Fecha de última actualización: 20/06/2022
                    <br />
                    <br />
                    <strong>¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO?</strong>
                    <br />
                    Identidad del responsable. DOLCKER SISTEMAS, S.L.
                    (B-09710724) Dirección física. Calle Talamanca del Jarama,
                    19 portal A 5ª. 28051 Madrid (Spain) Correo electrónico.
                    dolcker@dolcker.es Teléfono. +34 913 851 480
                    <br />
                    <br />
                    <strong>¿QUÉ DATOS PERSONALES TRATAMOS?</strong>
                    <br />
                    En el marco de los distintos tratamientos de actividades
                    realizadas en la organización, se recaban los siguiente
                    tipos: Datos de carácter identificativos.
                    <br />
                    <br />
                    <strong>
                        ¿CON QUÉ FINALIDAD Y CASOS ESPECÍFICOS CON QUE TRATAMOS
                        LOS DATOS PERSONALES?
                    </strong>
                    <br />
                    En www.dolcker.es se tratan los datos personales con las
                    siguientes finalidades: Newletter: Enviar información a
                    través de los medios proporcionados acerca de las novedades,
                    noticias, productos y servicios relacionados con nosotros o
                    nuestro sector.
                    <br />
                    <br />
                    Contacto: responder a las solicitudes de información
                    recibidas sobre los productos y servicios que se ofrecen,
                    así como dar respuesta a cualquier otro tipo de pregunta que
                    envíen los usuarios.
                    <br />
                    <br />
                    Con los datos personales recabados no se elaboraran perfiles
                    ni se realizarán decisiones automatizadas.
                    <br />
                    <br />
                    <strong>
                        ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE LOS
                        DATOS?
                    </strong>
                    <br />
                    En la organización se pueden tratar información de carácter
                    personal para: Consentimiento: Al acceder a nuestra web en
                    caso de rellenar los formularios o enviarnos datos a través
                    de los medios de contacto electrónicos indicados, aceptas
                    esta Política de Privacidad. Es por ello, que nos basamos en
                    el consentimiento del usuario para el tratamiento de sus
                    datos. Adicionalmente, te informamos que sólo usaremos la
                    información de carácter personal en virtud de esta Política
                    de Privacidad y, con carácter general, solicitaremos tu
                    consentimiento para usos con fines distintos de aquéllos
                    para los cuales los otorgaste inicialmente. Finalmente, te
                    informamos que puedes retirar el consentimiento en cualquier
                    momento, solo tendrás que ponerte en contacto con nosotros a
                    través de los medios indicados en esta política de
                    privacidad.
                    <br />
                    <br />
                    Para la respuesta a las solicitudes, el interesado deberá
                    proporcionar la información mínima solicitada. En caso
                    contrato, no podrán ser atendidas.
                    <br />
                    <br />
                    <strong>
                        ¿DURANTE CUÁNTO TRATAMOS LOS DATOS PERSONALES?
                    </strong>
                    <br />
                    En www.dolcker.es se tratan los datos personales durante los
                    siguientes plazos: El periodo establecido por la ley.
                    <br />
                    <br />
                    El período necesario para cumplir con las obligaciones
                    operativas.
                    <br />
                    <br />
                    Se conservarán los datos durante el tiempo necesario para
                    cumplir con la finalidad para la que se recabaron y para
                    determinar las posibles responsabilidades que se pudieran
                    derivar de dicha finalidad y del tratamiento de los datos,
                    conforme las normativas anteriormente expuestas, además de
                    los periodos establecidos en la normativa de archivos y
                    documentación que sea de aplicación.
                    <br />
                    <br />
                    <strong>
                        ¿CON QUIÉN COMPARTIMOS LOS DATOS PERSONALES?
                    </strong>
                    <br />
                    Para cumplir las finalidades anteriormente descritas, se
                    puede compartir datos personales con: Proveedores de
                    servicios que realizan servicios a nuestro nombre. No se
                    realizan transferencias internacionales fuera del Espacio
                    Económico Europeo.
                    <br />
                    <br />
                    <strong>¿QUÉ DERECHOS PUEDES EJERCER?</strong>
                    <br />
                    Según la normativa europea los derechos que le asisten son
                    los siguientes: Acceso, derecho a solicitar información al
                    responsable de un fichero sobre si sus datos personales
                    están siendo tratados.
                    <br />
                    <br />
                    Rectificación, derecho que permite a la persona afectada
                    solicitar la modificación de datos que sean inexactos o
                    incompletos.
                    <br />
                    <br />
                    Oposición, derecho de una persona a oponerse al tratamiento
                    de sus datos personales o el cese de éstos.
                    <br />
                    <br />
                    Decisiones individuales automatizadas, derecho a no ser
                    objeto de una decisión basada únicamente en el tratamiento
                    automatizado, incluida la elaboración de perfiles, que
                    produzca efectos jurídicos en él o le afecte
                    significativamente de modo similar.
                    <br />
                    <br />
                    Limitación, derecho a suspender el tratamiento de los datos
                    personales del usuario en determinados supuestos.
                    <br />
                    <br />
                    Supresión u Olvido, derecho a supresión de los datos
                    personales del interesado Portabilidad, derecho a solicitar
                    al responsable del tratamiento que se le faciliten los datos
                    personales en un formato estructurado y claro a otro
                    responsable. El plazo máximo para la resolución de la
                    solicitud es de 30 días desde su recepción, puede
                    prorrogarse como máximo por un plazo de 2 meses siempre que
                    sea necesario.
                    <br />
                    <br />
                    El solicitante puede ejercer sus derechos a través de los
                    siguientes medios: Email a recomiendo dolcker@dolcker.es,
                    aportando documentación que acredite la identidad del
                    solicitante (copia del anverso del Documento Nacional de
                    Identidad, o equivalente).
                    <br />
                    <br />
                    Correo postal a Calle Talamanca del Jarama, 19 portal A 5A.
                    28051, Madrid (Spain), aportando documentación que acredite
                    la identidad del solicitante (copia del anverso del
                    Documento Nacional de Identidad, o equivalente).
                    <br />
                    <br />
                    En cualquier caso, puede solicitar la tutela de la Agencia
                    Española de Protección de Datos a través de su página web.
                    <br />
                    <br />
                    <strong>CAMBIOS EN ESTA POLíTICA DE PRIVACIDAD</strong>
                    <br />
                    Eventualmente, esta Política de Privacidad puede ser
                    revisada con el fin de actualizar los cambios en la
                    legislación vigente, actualizar los procedimientos de
                    recogida y uso de la información de carácter personal, la
                    aparición de nuevos
                    <br />
                    <br />
                    servicios o la exclusión de otros. Estos cambios serán
                    vigentes a partir de su publicación en la web, por lo que es
                    importante que revises regularmente esta Política de
                    Privacidad con el fin de permanecer informado sobre los
                    cambios realizados.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default PoliticaPrivacidad
