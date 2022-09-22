import Text from '../../../components/Text'
import { Titulo, Titulo2 } from '../../../components/Titulos'
import StyledSistemas, { Enlaces } from './styles'

import sistemas from '../../../assets/images/Sistemas/sistemas.webp'

import dolckerClip1 from '../../../assets/images/Sistemas/sistema-dolcker-clip.webp'
import dolckerClip2 from '../../../assets/icons/Sistemas/EN/dolcker-clip.svg'

import tc111 from '../../../assets/images/Sistemas/sistema-dolcker-tc11.webp'
import tc112 from '../../../assets/icons/Sistemas/EN/dol-tc11.svg'

import tc141 from '../../../assets/images/Sistemas/sistema-dolcker-tc14.webp'
import tc142 from '../../../assets/icons/Sistemas/EN/dol-tc14.svg'

import hc201 from '../../../assets/images/Sistemas/sistema-dolcker-hc20.webp'
import hc202 from '../../../assets/icons/Sistemas/EN/dol-hc20.svg'
import ImageWithCaption from '../../../components/ImageWithCaption'

const Sistemas = ({ id }) => {
    return (
        <>
            <StyledSistemas id={id[0]}>
                <Titulo>CONSTRUCTION SYSTEM</Titulo>
                <ImageWithCaption
                    src={sistemas}
                    alt='Sistemas introducción'
                    columnSpan='5'
                />
                <Enlaces>
                    <li>
                        <a href={'#' + id[1]}>
                            System
                            <br />
                            <strong>Dolcker & Clip</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[2]}>
                            System
                            <br />
                            <strong>DOL - TC11</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[3]}>
                            System
                            <br />
                            <strong>DOL - TC14</strong>
                        </a>
                    </li>
                    <li>
                        <a href={'#' + id[4]}>
                            System
                            <br />
                            <strong>DOL - HC20</strong>
                        </a>
                    </li>
                </Enlaces>
            </StyledSistemas>

            <StyledSistemas id={id[1]}>
                <Titulo2>Dolcker & Clip</Titulo2>
                <Text>
                    The DOLCKER & CLIP system for dolcker-type ceramic facades
                    is a system with high-inertia profiles and double security.
                    Each and every one of the elements that make up this system
                    are manufactured with the highest quality raw materials.
                    <br />
                    <br />
                    It is a mechanical clip fixing system + chemical fixing by
                    means of a substructure that is made up of adjustable
                    brackets made of high-quality aluminum in the shape of an
                    “L”, 3 mm thick, which transmit forces and are fixed by
                    means of anchoring to the base structure of the building
                    (brick wall or concrete slab). On these brackets, the 3 mm
                    thick “T” shaped vertical extruded aluminum profiles are
                    fixed by means of stainless steel self-drilling screws.
                    <br />
                    <br />
                    Horizontal “G”-shaped profiles are screwed into these
                    “T”-shaped profiles, thus allowing the piece to be supported
                    in its entirety. It is the ideal system for placing
                    ceramics, allowing the pieces to be replaced as it has a
                    sliding stainless steel clip, achieving an infinite number
                    of placements. It also allows the horizontal profile to be
                    lacquered according to the color of its carpentry, allowing
                    the customer to choose the color of the joint. At least two
                    sliding clips are placed on top of the starter piece at 1/5
                    of the length of the piece. In the rest of the intermediate
                    pieces, at least 4 clips will be placed for each piece of
                    ceramic. Points of sika-111 polyurethane gluing and sealing
                    putty or similar (4 per piece) will be added to allow us to
                    absorb the expansion of the façade in the sliding clips.
                    <br />
                    <br />
                    It is, without a doubt, a system with multiple façade
                    composition options since it is possible to break the
                    vertical joints. These vertical joints are minimized to just
                    1 mm, thus enhancing the horizontal joints. The output of
                    the ceramic is between 43-47 mm depending on the thickness
                    of the chosen ceramic.
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
                    The DOL-TC11 system for ceramic facades with hidden clips is
                    a safe, easy and simple system to install. Each and every
                    one of the elements that make up this system are
                    manufactured with the highest quality raw materials.
                    <br />
                    <br />
                    It is a hidden mechanical fastening through a substructure
                    that is made up of adjustable brackets made of high-quality
                    aluminum, 3 mm thick, with a separating function, which also
                    transmit forces and are fixed to the base structure of the
                    building ( brick wall or concrete floor)
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
                    The DOL-TC14 system for ceramic facades with hidden clips is
                    a safe, easy and simple system to install. Each and every
                    one of the elements that make up this system are
                    manufactured with the highest quality raw materials.
                    <br />
                    <br />
                    It is a hidden mechanical fastening through a substructure
                    that is made up of adjustable brackets made of high-quality
                    aluminum, 3 mm thick, with a separating function, which also
                    transmit forces and are fixed to the base structure of the
                    building ( brick wall or concrete floor)
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
                    The DOL-HC20 system for 20 mm ceramic or stone facades with
                    hidden clip is a safe, easy and simple system to install.
                    Each and every one of the elements that make up this system
                    are manufactured with the highest quality raw materials.
                    <br />
                    <br />
                    It is a hidden mechanical fastening through a substructure
                    that is made up of adjustable high-quality aluminum brackets
                    3 mm thick with a spacer function, which also transmit
                    forces and are fixed to the base structure of the building
                    (brick wall or concrete floor)
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
