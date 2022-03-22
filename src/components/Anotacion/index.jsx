import click from '../../assets/icons/handdown.svg'
import normal from '../../assets/icons/handup.svg'
import swipe from '../../assets/icons/handswipe.svg'
import StyledAnotacion from './styles'

const Anotacion = ({ type, text }) => {
    const types = {
        click,
        normal,
        swipe,
    }

    return (
        <StyledAnotacion>
            <img src={types[type]} alt={'Icono de ' + type} />
            {text}
        </StyledAnotacion>
    )
}

export default Anotacion
