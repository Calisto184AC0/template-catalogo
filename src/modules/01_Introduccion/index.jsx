import StyledIntroduccion from './styles'
import { COLORS } from '../../global/GlobalStyles'
import logo from '../../assets/images/Introduccion/logo.svg'
import Cita from '../../components/Cita'
import { useEffect } from 'react'
import { totalDuration } from './animationsConfig'
import scrollTo from '../../helpers/scrollTo'

const Introduccion = () => {
    useEffect(() => {
        if (window.scrollY === 0) {
            document.body.style.overflow = 'hidden'
            setTimeout(() => {
                scrollTo(window.innerHeight, 2000)
                document.body.style.overflow = 'auto'
            }, (totalDuration + 1.5) * 1000)
        } else {
            document.body.parentElement.style.scrollBehavior = 'smooth'
        }
    }, [])

    return (
        <StyledIntroduccion backgroundColor={COLORS.gray01}>
            <img src={logo} alt='logo' />
            <Cita
                cita='La arquitectura es el encuentro de la luz con la forma'
                author='Le Corbusier'
                big
                colorAutor={COLORS.gray04}
            />
        </StyledIntroduccion>
    )
}

export default Introduccion
