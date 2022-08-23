import click from '../../assets/icons/handdown.svg'
import normal from '../../assets/icons/handup.svg'
import swipe from '../../assets/icons/handswipe.svg'
import StyledAnotacion from './styles'

const Anotacion = ({ type, text, className, onClick }) => {
    const types = {
        click,
        normal,
        swipe,
    }

    return (
        <StyledAnotacion className={className} onClick={onClick}>
            <img src={types[type]} alt={'Icono de ' + type} />
            {text}
        </StyledAnotacion>
    )
}

export default Anotacion
