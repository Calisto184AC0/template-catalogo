import StyledIndicador from './styles'

const Indicador = props => {
    return (
        <StyledIndicador
            alt=''
            position={{ X: props.left, Y: props.top }}
            {...props}
        />
    )
}

export default Indicador
