import Logo from '../../../components/Logo'
import Text from '../../../components/Text'
import { COLORS } from '../../../global/GlobalStyles'
import StyledFinal from './styles'

const Final = ({ invert = false }) => {
    const bgColor = invert ? COLORS.gray01 : COLORS.gray08
    const textColor = invert ? COLORS.gray08 : COLORS.gray01

    return (
        <StyledFinal backgroundColor={bgColor} fullScreen>
            <Logo />
            <Text color={textColor}>
                The content of this catalog is protected by the Intellectual
                Property Law, Royal Legislative Decree 1/1996. Any reproduction
                of the same, in part or in its entirety, without the express
                authorization of DOLCKER may be sanctioned in accordance with
                the penal code.
                <br />
                <br />
                DOLCKER reserves the right to modify and/or delete certain
                models, characteristics or presentations of the models displayed
                in this catalogue, without prior notice, due to production
                requirements without incurring any right or prejudice.
                <br />
                <br />
                All our standard measurements are subject to possible variations
                due to production circumstances. The environments shown in this
                catalog are decorative suggestions for advertising purposes. The
                colors and/or tones of the pieces may present slight differences
                with respect to the real pieces. It is important before laying
                to check that the pieces correspond to the requested models and
                characteristics of quality, tone and caliber. The installation
                instructions published by DOLCKER must be used in the actual
                installation.
            </Text>
        </StyledFinal>
    )
}

export default Final
