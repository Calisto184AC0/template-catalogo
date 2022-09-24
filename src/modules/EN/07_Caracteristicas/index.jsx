/* eslint-disable react/no-unescaped-entities */
import ImageWithCaption from '../../../components/ImageWithCaption'
import { Titulo } from '../../../components/Titulos'
import { COLORS } from '../../../global/GlobalStyles'
import StyledCaracteristicas from './styles'
import caracter1 from '../../../assets/images/Caracteristicas/caracteristicas_01.webp'
import caracter2 from '../../../assets/icons/caracteristicas/caracteristicas_02.svg'
import caracter3 from '../../../assets/icons/caracteristicas/caracteristicas_03.svg'
import Text from '../../../components/Text'
import Listado from '../../../components/Listado'

const Caracteristicas = ({ id }) => {
    return (
        <>
            <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
                <Titulo>TECHNICAL CHARACTERISTICS</Titulo>
                <ImageWithCaption
                    src={caracter1}
                    alt='características técnicas imagen'
                    columnSpan='6'
                />
                <Text>
                    DOLCKER is a compact, resistant material characterized by an
                    almost non-existent porosity and by less than 0.1% water
                    absorption.
                    <br />
                    <br />
                    Its vitrified structure, with a low degree of porosity,
                    guarantees high impermeability to dirt and ice.
                    <br />
                    <br />
                    full&body body
                    <br />
                    <br />
                    The advantages of a unique material.
                </Text>
                <Listado>
                    <li>
                        <strong>
                            Wide range of colors, formats, thicknesses and
                            finishes.
                        </strong>
                    </li>
                    <li>
                        <strong>It's antacid.</strong> It is insensitive to the
                        most widespread acids (it does not resist the attack of
                        hydrofluoric acid).
                    </li>
                    <li>
                        <strong>It is resistant.</strong> Resistant to abrasion
                        and wear more than any natural material.
                    </li>
                    <li>
                        <strong>Not fuel.</strong> The material does not burn or
                        produce toxic-harmful gases or fumes in case of fire or
                        exposure to flames.
                    </li>
                    <li>
                        <strong>
                            Does not retain organic substances and bacteria,
                            cause of allergies and disturbances.
                        </strong>
                    </li>
                    <li>
                        <strong>Easy to work with.</strong> The product lends
                        itself to being worked (cut, drilled, etc.) like natural
                        stone to satisfy any type of customization.
                    </li>
                    <li>
                        <strong>It is unassailable.</strong> No problem with hot
                        pots or lighted cigarettes, which on the contrary damage
                        wood, plastic laminates or resin agglomerates.
                    </li>
                    <li>
                        <strong>Easy to clean.</strong> It is possible to use
                        very strong detergents or solvents without the danger of
                        damaging the material.
                    </li>
                    <li>
                        <strong>Frost resistant.</strong> The material is
                        resistant to cold and ice.
                    </li>
                    <li>
                        <strong>Chromatic stable.</strong> The colors are
                        completely stable and are not altered by exposure to the
                        sun, atmospheric agents or smog.
                    </li>
                </Listado>
                <Text>
                    <strong>ECOLOGICAL</strong>
                    <br />
                    <br />
                    It does not contain chemical waterproofing agents, varnishes
                    or resins, it does not emit exhalations even with the heat
                    of a flame. Contrary to some natural stones, it does not
                    emit Radon or other radioactive gases and it is not polished
                    with lead. It is produced respecting the environment.
                    <br />
                    <br />
                    <strong>
                        RESISTANCE TO SURPASS CHANGES IN TEMPERATURE
                    </strong>
                    <br />
                    <br />
                    <strong>
                        BENDING STRENGTH WITH FIXED AND STATIC LOADS
                    </strong>
                    <br />
                    <br />
                    <strong>RESISTANCE TO IMPACT AND ABRASION SAFETY</strong>
                </Text>
                <Listado>
                    <li>Negligible moisture expansion</li>
                    <li>Fireproof</li>
                    <li>Flame retardant</li>
                    <li>Absence of danger in case of fire</li>
                    <li>Electrical safety</li>
                </Listado>
                <Text>
                    <strong>HEALTH & WELLNESS</strong>
                </Text>
                <Listado>
                    <li>Lack of own or acquired odor</li>
                    <li>Resistance to self-dust release</li>
                    <li>Ease of cleaning dust acquired</li>
                    <li>Easy cleaning and maintenance</li>
                    <li>
                        It is a product that, due to its electrical insulating
                        capacity, prevents the capture of electrically active
                        environmental dust.
                    </li>
                    <li>Suitable where water use is abundant</li>
                    <li>
                        It is the definitive installation: it does not require
                        any maintenance after its installation.
                    </li>
                </Listado>
            </StyledCaracteristicas>
            <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray01}>
                <Titulo>TECHNICAL DATA</Titulo>
                <ImageWithCaption
                    src={caracter2}
                    alt='características dimensionales y mecanicas'
                    columnSpan='6'
                />
                <Text>
                    <strong>PHYSICAL AND MECHANICAL CHARACTERISTICS</strong>
                    <br />
                    <br />
                    Ceramic pieces are classified as dry-pressed ceramic tiles
                    with low water absorption according to the UNE-EN 14411
                    standard, with the following characteristics declared by the
                    manufacturer:
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
