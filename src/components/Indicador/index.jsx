import StyledIndicador from './styles'
import openIndicador from '../../assets/icons/open-indicator.svg'

const Indicador = props => {
    return (
        <StyledIndicador
            src={props.icon ? props.icon : openIndicador}
            alt=''
            position={{ X: props.left, Y: props.top }}
            {...props}
        />
    )
}

export default Indicador
