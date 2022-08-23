import StyledIntroduccion from './styles'
import { COLORS } from '../../../global/GlobalStyles'
import Cita from '../../../components/Cita'
import { useEffect } from 'react'
import { totalDuration } from './animationsConfig'
import scrollTo from '../../../helpers/scrollTo'
import Logo from '../../../components/Logo'

const Introduccion = ({ indiceRef }) => {
    useEffect(() => {
        if (window.scrollY === 0) {
            document.body.style.overflow = 'hidden'

            setTimeout(() => {
                scrollTo(indiceRef.current.offsetTop, 2000)
                document.body.style.overflow = 'auto'
            }, (totalDuration + 1.5) * 1000)
        } else {
            document.body.parentElement.style.scrollBehavior = 'smooth'
        }
    }, [])

    return (
        <StyledIntroduccion backgroundColor={COLORS.gray01}>
            <Logo />
            <Cita
                cita='Architecture is the meeting of light with form.'
                author='Le Corbusier'
                big
                colorAutor={COLORS.gray04}
            />
        </StyledIntroduccion>
    )
}

export default Introduccion
