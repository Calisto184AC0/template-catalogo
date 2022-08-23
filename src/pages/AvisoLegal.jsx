import { Link } from 'react-router-dom'
import MenuLanzadera from '../components/ListaContenidos/MenuLanzadera'
import Seccion from '../components/Seccion'
import Text from '../components/Text'
import { Titulo2 } from '../components/Titulos'
import useMenuDesplegable from '../hooks/useMenuDesplegable'
import Final from '../modules/10_Final'

const AvisoLegal = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )
    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion>
                <Titulo2>Aviso legal</Titulo2>
                <Text>
                    <strong>DATOS IDENTIFICATIVOS:</strong>
                    <br />
                    Ley 34/2002, de 11 de julio, de servicios de la sociedad de
                    la información y de comercio electrónico Razón social:
                    DOLCKER SISTEMAS, S.L. CIF: B-09710724 Domicilio: Calle
                    Talamanca del Jarama, 19 portal A 5ª. 28051 Madrid (Spain)
                    Correo electrónico: dolcker@dolcker.es Teléfono: +34 913 851
                    480 en adelante EL TITULAR.
                    <br />
                    <br />
                    <strong>OBJETO</strong>
                    <br />
                    El objeto de LA WEB es proporcionar información acerca de
                    nuestros servicios y noticias. Si deseas contactar con
                    nosotros puedes hacerlo a través de los siguientes medios:
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            Mediante correo postal, en la dirección indicada
                            anteriormente a través del correo electrónico a La
                            dirección dolcker@dolcker.es
                        </li>
                        <li>Mediante el teléfono: +34 913 851 480</li>
                    </ul>
                    <br />
                    El acceso a la página web es gratuito salvo en lo relativo
                    al coste de la conexión a través de la red de
                    telecomunicaciones suministrada por el proveedor de acceso
                    contratado por EL USUARIO.
                    <br />
                    Las Condiciones de Uso, tienen por objeto definir las
                    condiciones en las que se realizan las ventas de los
                    productos propuestos en la página web del TITULAR.
                    <br />
                    <br />
                    <strong>USO DE LA WEB</strong>
                    <br />
                    www.dolcker.es proporciona el acceso a multitud de
                    informaciones y servicios (en adelante, “los contenidos”)
                    pertenecientes a EL TITULAR. El usuario asume la
                    responsabilidad del uso de la web. Dicha responsabilidad se
                    extiende a los registros que fuese necesario para acceder a
                    determinados servicios o contenidos. En dichos registros el
                    usuario será responsable de aportar información veraz y
                    lícita. El usuario se compromete a hacer un uso adecuado de
                    los contenidos y servicios que EL TITULAR ofrece a través de
                    su web y con carácter enunciativo pero no limitativo, a no
                    emplearlos para (I) incurrir en actividades ilícitas,
                    ilegales o contrarias a la buena fe y al orden público; (II)
                    difundir contenidos o propaganda de carácter racista,
                    xenófobo, pornográfico-ilegal, de apología del terrorismo o
                    atentatorio contra los derechos humanos; (III) provocar
                    daños en los sistemas físicos y lógicos de EL TITULAR, de
                    sus proveedores o de terceras personas, introducir o
                    difundir en la red virus informáticos o cualesquiera otros
                    sistemas físicos o lógicos que sean susceptibles de provocar
                    los daños anteriormente mencionados; (IV) intentar acceder
                    y, en su caso, utilizar las cuentas de correo electrónico de
                    otros usuarios y modificar o manipular sus mensajes. EL
                    TITULAR se reserva el derecho de retirar todos aquellos
                    comentarios y aportaciones que vulneren el respeto a la
                    dignidad de la persona, que sean discriminatorios,
                    xenófobos, racistas, pornográficos, que atenten contra la
                    juventud o la infancia, el orden o la seguridad pública o
                    que, a su juicio, no resultaran adecuados para su
                    publicación por no estar relacionados con el objetivo. En
                    cualquier caso, EL TITULAR como administrador de su web,
                    actuará diligentemente nada más tenga conocimiento de actos
                    cometidos en contra de la ética profesional, la imagen y el
                    prestigio de EL TITULAR, así como las presentes Condiciones
                    de Uso o de su Política de Privacidad. EL TITULAR se reserva
                    el derecho a denegar discrecionalmente, en cualquier momento
                    y sin necesidad de preaviso, el acceso de cualquier usuario
                    a esta página web o a parte de la misma.
                    <br />
                    <br />
                    <strong>POLÍTICA DE ENLACES</strong>
                    <br />
                    Los sitios web enlazados no están controlados por EL TITULAR
                    y EL TITULAR no se hace responsable de los contenidos de
                    ningún sitio enlazado ni de ningún enlace que se encuentre
                    en cualquier sitio web enlazado, ni de ningún cambio o
                    actualización de tales sitios web. EL TITULAR sólo le está
                    proporcionando estos enlaces a usted para su comodidad, y la
                    inclusión de cualquier enlace no implica la aprobación del
                    sitio web por EL TITULAR.
                    <br />
                    <br />
                    <strong>DERECHOS DE PROPIEDAD INTELECTUAL</strong>
                    <br />
                    La página web www.dolcker.es , su código fuente, diseño,
                    estructura de navegación, bases de datos y los distintos
                    elementos contenidos en la misma (textos, gráficos,
                    imágenes, fotografías, muestras y materiales que aparecen en
                    los mismos, tecnologías industriales, ficheros, logotipos,
                    combinaciones de colores y cualquier elemento susceptible de
                    protección) están protegidos por derechos de propiedad
                    intelectual e industrial titularidad de DOLCKER SISTEMAS,
                    S.L. EL USUARIO está autorizado a reproducir, visualizar,
                    imprimir, enlazar y/o descargar parcialmente contenido de LA
                    WEB sólo y exclusivamente cumpliendo TODAS las siguientes
                    condiciones:
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>Que sea compatible con el objetivo de LA WEB</li>
                        <li>
                            Que no se utilice para fines comerciales ajenos a EL
                            TITULAR.
                        </li>
                        <li>
                            Que ninguno de los contenidos de la WEB sean
                            alterados de manera alguna.
                        </li>
                        <li>
                            Que ningún gráfico, fotografía o imagen disponible
                            en la WEB sea utilizado, copiado o distribuido
                            separadamente del texto o resto de imágenes que lo
                            acompañan.
                        </li>
                        <li>
                            Que se incluya, en todo momento y de forma visible
                            información sobre la dirección URL (o enlace) a la
                            página web de donde se ha extraído la misma o en su
                            defecto a www.dolcker.es
                        </li>
                    </ul>
                    <br />
                    <br />
                    EL USUARIO de LA WEB deberá abstenerse de suprimir, alterar,
                    eludir o manipular cualesquiera dispositivos de protección o
                    sistemas de seguridad incluidos en los distintos elementos
                    que la forman (gráficos, imágenes, fotografías, muestras y
                    materiales que aparecen en los mismos, ficheros, logotipos,
                    etc.…).
                    <br />
                    <br />
                    El acceso a LA WEB no implica cesión, transmisión o
                    cualquier otro tipo de renuncia, total o parcial, de los
                    derechos de Propiedad Intelectual o Industrial. No se
                    permite la utilización de los signos distintivos (marcas,
                    nombres comerciales), salvo autorización expresa de los
                    legítimos titulares.
                    <br />
                    <br />
                    EL TITULAR se reserva el derecho de modificar, suprimir y/o
                    actualizar las informaciones y elementos contenidos en LA
                    WEB, su configuración y/o su presentación, en cualquier
                    momento y sin necesidad de previo aviso.
                    <br />
                    <br />
                    <strong>LIMITACIÓN DE RESPONSABILIDADES</strong>
                    <br />
                    El USUARIO se compromete a no utilizar el sitio web y los
                    servicios que se ofrecen en el mismo para la realización de
                    actividades contrarias a la ley y a respetar en todo momento
                    las presentes condiciones generales, absteniéndose de
                    utilizar el sitio web www.dolcker.es , de cualquier forma
                    que pueda impedir, dañar o deteriorar el normal
                    funcionamiento del mismo, los bienes o derechos de EL
                    TITULAR, del resto de Usuarios o en general de cualquier
                    tercero.
                    <br />
                    <br />
                    En particular, y sin que ello implique restricción alguna a
                    la obligación asumida por EL USUARIO con carácter general de
                    conformidad con el apartado anterior, EL USUARIO se obliga,
                    en la utilización de LA WEB a:
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            No introducir, almacenar o difundir en o desde el
                            sitio web, contenidos o propaganda de carácter
                            racista, xenófobo, pornográfico, sexista, de
                            apología del terrorismo o atentatorio contra los
                            derechos humanos, o actuar en perjuicio de los
                            derechos a la intimidad, al honor, a la propia
                            imagen o contra la dignidad de las personas.
                        </li>
                        <li>
                            No introducir, almacenar o difundir mediante el
                            sitio web virus informáticos o cualesquiera otros
                            sistemas físicos o lógicos que sean susceptibles de
                            provocar daños en los equipos informáticos de EL
                            TITULAR o de terceros.
                        </li>
                        <li>
                            No introducir, almacenar o difundir en o desde el
                            sitio web manifestaciones o referencias falsas,
                            incorrectas o inexactas sobre las páginas, los
                            productos y/o los servicios de EL TITULAR.
                        </li>
                    </ul>
                    <br />
                    <br />
                    EL TITULAR no será responsable:
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            Respecto del uso inadecuado del servicio.- EL
                            USUARIO debe realizar un uso adecuado del servicio
                            puesto a su disposición, sin que ninguna
                            responsabilidad pueda tener EL TITULAR por la
                            utilización indebida.
                        </li>
                        <li>
                            Respecto a las opiniones o contenidos.- EL TITULAR
                            no se hace responsable directamente ni
                            subsidiariamente de las opiniones o contenidos
                            emitidos en los mensajes.
                        </li>
                        <li>
                            Respecto de posibles deficiencias técnicas.- La
                            EMPRESA no será responsable en ningún caso de las
                            alteraciones en el servicio que se produzcan por
                            fallos en la red eléctrica, en la red de conexión de
                            datos, en el servidor o en las prestaciones de los
                            mismos.
                        </li>
                        <li>
                            Respecto del contenido de páginas de terceros. EL
                            TITULAR no es responsable de la información y demás
                            contenidos integrados en espacios o páginas web de
                            terceros accesibles desde LA WEB.
                        </li>
                    </ul>
                    <br />
                    <br />
                    EL TITULAR invierte incesantemente en dispositivos
                    tecnológicos que tratan de minimizar el riesgo de virus y
                    software similares, así como de contenidos no autorizados en
                    sus sistemas de información. Sin embargo, EL USUARIO debe
                    ser consciente de que debe adoptar sus propias medidas
                    orientadas a minimizar los daños ocasionados por dicho
                    software no autorizado, virus, troyanos y cualquier clase de
                    software denominado malware, eximiendo a EL TITULAR de toda
                    responsabilidad que pudiera derivarse de la contención de
                    malware en los ficheros habilitados en la presente web.
                    <br />
                    <br />
                    Como quiera que el uso de LA WEB puede suponer un
                    tratamiento de datos personales le rogamos lea atentamente
                    nuestra política de privacidad al respecto. EL TITULAR se
                    reserva el derecho de modificar, en todo momento y sin
                    previo aviso, las presentes Condiciones Generales, así como
                    las Condiciones Particulares que, en su caso, se incluyan,
                    mediante la publicación de dichas modificaciones en el sitio
                    web con el fin de que puedan ser conocidas por los Usuarios.
                    En caso de que cualquier cláusula del presente documento sea
                    declarada nula, las demás cláusulas seguirán vigentes y se
                    interpretarán teniendo en cuenta la voluntad de las partes y
                    la finalidad misma de las presentes condiciones.
                    <br />
                    <br />
                    EL TITULAR no será responsable si no tiene conocimiento
                    efectivo de que la actividad o la información a la que
                    remite o recomienda es ilícita o de que lesiona bienes o
                    derechos de un tercero susceptibles de indemnización, o si
                    lo tiene, actúa con diligencia para suprimir o inutilizar el
                    enlace correspondiente.
                    <br />
                    <br />
                    <strong>JURISDICCIÓN Y LEYES APLICABLES</strong>
                    <br />
                    La ley aplicable al presente contrato será la Ley Española.
                    Para las controversias que pudieren surgir con ocasión del
                    presente contrato, las partes, con renuncia de su fuero
                    propio, se someten expresamente a los Juzgados y Tribunales
                    de Madrid.
                    <br />
                    <br />
                    <strong>GENERALIDADES</strong>
                    <br />
                    EL TITULAR perseguirá el incumplimiento de las presentes
                    condiciones así como cualquier utilización indebida de su
                    web ejerciendo todas las acciones legales que le puedan
                    corresponder en derecho.
                    <br />
                    <br />
                    Eventualmente, estas Condiciones de Uso pueden ser revisadas
                    con el fin de actualizar los cambios en la legislación
                    vigente, actualizar nuestros procedimientos de recogida y
                    uso de la información, la aparición de nuevos servicios o la
                    exclusión de otros. Estos cambios serán vigentes a partir de
                    su publicación en la web, por lo que es importante que
                    revises regularmente este Aviso Legal con el fin de
                    permanecer informado sobre los cambios realizados.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default AvisoLegal
