import { Titulo2 } from '../../../../components/Titulos'
import { COLORS } from '../../../../global/GlobalStyles'
import useImagesSeries from '../../../../hooks/useImagesSeries'
import StyledIndiceSeries from './styles'

const IndiceSeries = ({ id }) => {
    const enlacesSeries = useImagesSeries()

    return (
        <StyledIndiceSeries id={id} backgroundColor={COLORS.gray04}>
            <Titulo2>Series</Titulo2>
            {enlacesSeries}
        </StyledIndiceSeries>
    )
}

export default IndiceSeries
