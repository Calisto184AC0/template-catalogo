import Logo from '../../components/Logo'
import Text from '../../components/Text'
import { COLORS } from '../../global/GlobalStyles'
import StyledFinal from './styles'

const Final = ({ invert = false }) => {
    const bgColor = invert ? COLORS.gray01 : COLORS.gray08
    const textColor = invert ? COLORS.gray08 : COLORS.gray01

    return (
        <StyledFinal backgroundColor={bgColor} fullScreen>
            <Logo />
            <Text color={textColor}>
                El contenido de este catálogo está protegido por la ley de
                Propiedad Intelectual, Real Decreto Legistlativo 1/1996.
                Cualquier reproducción del mismo, en parte o en su totalidad,
                sin autorización expresa de DOLCKER puede ser sancionada
                conforme el código penal.
                <br />
                <br />
                DOLCKER se reserva el derecho de modificar y/o suprimir ciertos
                modelos, características o presentaciones de los modelos
                expuestos en este catálogo, sin previo aviso, por exigencias de
                producción sin que se contraiga derecho o perjuicio alguno.
                <br />
                <br />
                Todas nuestras medidas stándard estan sujetas a posibles
                variaciones por circunstancias de la producción. Los ambientes
                que se muestran en este catálogo, son sugerencias decorativas de
                carácter publicitario. Los colores y/o tonos de las piezas,
                pueden presentar ligeras diferencias respecto a las piezas
                reales. Es importante antes de la colocación comprobar que las
                piezas corresponden a los modelos y características de calidad,
                tono y calibre solicitados. Debiéndose utilizar en la
                instalación real las instrucciones de colocación editadas por
                DOLCKER.
            </Text>
        </StyledFinal>
    )
}

export default Final
