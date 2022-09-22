import Text from '../../components/Text'
import { Titulo, Titulo2 } from '../../components/Titulos'
import StyledSistemas, { Enlaces } from './styles'

import sistemas from '../../assets/images/Sistemas/sistemas.webp'

import dolckerClip1 from '../../assets/images/Sistemas/sistema-dolcker-clip.webp'
import dolckerClip2 from '../../assets/icons/Sistemas/dolcker-clip.svg'

import tc111 from '../../assets/images/Sistemas/sistema-dolcker-tc11.webp'
import tc112 from '../../assets/icons/Sistemas/dol-tc11.svg'

import tc141 from '../../assets/images/Sistemas/sistema-dolcker-tc14.webp'
import tc142 from '../../assets/icons/Sistemas/dol-tc14.svg'

import hc201 from '../../assets/images/Sistemas/sistema-dolcker-hc20.webp'
import hc202 from '../../assets/icons/Sistemas/dol-hc20.svg'
import ImageWithCaption from '../../components/ImageWithCaption'

const Sistemas = ({ id }) => {
    return (
        <>
            <StyledSistemas id={id[0]}>
                <Titulo>Sistema constructivos</Titulo>
                <ImageWithCaption
                    src={sistemas}
                    alt='Sistemas introducción'
                    columnSpan='5'
                />
                <Enlaces>
                    <li>
                        <a href={'#' + id[1]}>
                            Sistema
                            <br />
                            <strong>Dolcker & Clip</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[2]}>
                            Sistema
                            <br />
                            <strong>DOL - TC11</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[3]}>
                            Sistema
                            <br />
                            <strong>DOL - TC14</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[4]}>
                            Sistema
                            <br />
                            <strong>DOL - HC20</strong>
                        </a>
                    </li>
                </Enlaces>
            </StyledSistemas>

            <StyledSistemas id={id[1]}>
                <Titulo2>Dolcker & Clip</Titulo2>
                <Text>
                    El sistema DOLCKER & CLIP para fachadas de cerámica tipo
                    dolcker es un sistema con perfilería de alta inercia y doble
                    seguridad. Todos y cada uno de los elementos que componen
                    este sistema están fabricados con materias primas de máxima
                    calidad.
                    <br />
                    <br />
                    Se trata de un sistema de fijación mecánica de clip +
                    fijación química mediante una subestructura que está
                    compuesta por ménsulas regulables de aluminio de alta
                    calidad en forma de “L” de 3 mm de espesor, que transmiten
                    esfuerzos y que van fijadas mediante anclaje a la estructura
                    base del edificio (pared de ladrillo o forjado de
                    hormigón).Sobre estas ménsulas se fijan mediante tornillos
                    autotaladrantes de acero inoxidable los perfiles verticales
                    de aluminio extruidos en forma de“T”de 3 mm de espesor.
                    <br />
                    <br />
                    En estos perfiles en forma de “T” se atornillan unos
                    perfiles horizontales en forma de “G”, permitiendo así que
                    la pieza esté apoyada en su totalidad. Se trata del sistema
                    idóneo para la colocación de cerámicas, permitiendo
                    sustituir las piezas ya que dispone de un clip corredera de
                    acero inoxidable logrando infinidad de colocaciones. Además
                    permite lacar el perfil horizontal en función del color de
                    su carpintería, permitiendo que el cliente elija el color de
                    la junta. Se colocan al menos dos clips correderas en la
                    parte superior de la pieza de arranque a 1/5 de distancia
                    respecto a la longitud de la pieza. En el resto de piezas
                    intermedias, se procederá a la colocación de al menos 4
                    clips por cada pieza de cerámica. Se le añadirá puntos de
                    masilla poliuretano de pegado y sellado sika-111 o similar
                    (4 por pieza) que nos permita absorber las dilataciones de
                    la fachada en los clips correderas.
                    <br />
                    <br />
                    Se trata sin duda de un sistema con múltiples opciones de
                    composición de fachada ya que es posible romper las juntas
                    verticales. Éstas juntas verticales se ven minimizadas a tan
                    solo 1 mm potenciando de esta manera las juntas
                    horizontales. La salida de la cerámica es entre 43-47 mm
                    dependiendo del espesor de la cerámica escogida.
                </Text>
                <ImageWithCaption
                    src={dolckerClip1}
                    alt='Dolcker-clip demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={dolckerClip2}
                    alt='Dolcker-clip tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[2]}>
                <Titulo2>DOL - TC11</Titulo2>
                <Text>
                    El sistema DOL-TC11 para fachadas de cerámica con grapa
                    oculta es un sistema seguro, fácil y sencillo de instalar.
                    Todos y cada uno de los elementos que componen este sistema
                    están fabricados con materias primeras de máxima calidad.
                    <br />
                    <br />
                    Se trata de un de fijación mecánica oculta mediante una
                    subestructura que está compuesta por escuadras (ménsulas)
                    regulables de aluminio de alta calidad de 3 mm de espesor
                    con función de separadora, que también transmiten esfuerzos
                    y que van fijadas a la estructura base del edificio (pared
                    de ladrillo o forjado de hormigón)
                </Text>
                <ImageWithCaption
                    src={tc111}
                    alt='DOL-TC11 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc112}
                    alt='DOL-TC11 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[3]}>
                <Titulo2>DOL - TC14</Titulo2>
                <Text>
                    El sistema DOL-TC14 para fachadas de cerámica con grapa
                    oculta es un sistema seguro, fácil y sencillo de instalar.
                    Todos y cada uno de los elementos que componen este sistema
                    están fabricados con materias primeras de máxima calidad.
                    <br />
                    <br />
                    Se trata de un de fijación mecánica oculta mediante una
                    subestructura que está compuesta por escuadras (ménsulas)
                    regulables de aluminio de alta calidad de 3 mm de espesor
                    con función de separadora, que también transmiten esfuerzos
                    y que van fijadas a la estructura base del edificio (pared
                    de ladrillo o forjado de hormigón)
                </Text>
                <ImageWithCaption
                    src={tc141}
                    alt='DOL-TC14 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={tc142}
                    alt='DOL-TC14 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>

            <StyledSistemas id={id[4]}>
                <Titulo2>DOL - HC20</Titulo2>
                <Text>
                    El sistema DOL-HC20 para fachadas de cerámica o piedra de 20
                    mm con grapa oculta es un sistema seguro, fácil y sencillo
                    de instalar. Todos y cada uno de los elementos que componen
                    este sistema están fabricados con materias primeras de
                    máxima calidad.
                    <br />
                    <br />
                    Se trata de un de fijación mecánica oculta mediante una
                    subestructura que está compuesta por escuadras (ménsulas)
                    regulables de aluminio de alta calidad de 3 mm de espesor
                    con función de separadora, que también transmiten esfuerzos
                    y que van fijadas a la estructura base del edificio (pared
                    de ladrillo o forjado de hormigón)
                </Text>
                <ImageWithCaption
                    src={hc201}
                    alt='DOL-HC20 demostración'
                    columnSpan='5'
                    isGray
                />
                <ImageWithCaption
                    src={hc202}
                    alt='DOL-HC20 tabla'
                    columnSpan='8'
                    isGray
                />
            </StyledSistemas>
        </>
    )
}

export default Sistemas
