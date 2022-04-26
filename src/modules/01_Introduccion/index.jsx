import StyledIntroduccion from './styles'
import { COLORS } from '../../global/GlobalStyles'
import logo from '../../assets/images/Introduccion/logo.svg'
import Cita from '../../components/Cita'
import { useEffect } from 'react'
import { totalDuration } from './animationsConfig'
import Scroll from 'react-scroll'

const Introduccion = () => {
    useEffect(() => {
        if (window.scrollY === 0) {
            document.body.style.overflow = 'hidden'
            setTimeout(() => {
                Scroll.animateScroll.scrollTo(window.innerHeight, {
                    duration: 2000,
                    smooth: true,
                })
                document.body.style.overflow = 'auto'
            }, (totalDuration + 1.5) * 1000)
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
