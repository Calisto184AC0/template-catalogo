import styled from 'styled-components'
import logo from '../assets/icons/Introduccion/logo.svg'

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logo',
})`
    width: clamp(109px, 11.40625vw, 219px);
    filter: invert(1);
    mix-blend-mode: difference;
`

export default Logo
