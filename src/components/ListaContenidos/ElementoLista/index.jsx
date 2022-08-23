import StyledElementoLista from './styles'
import { Link } from 'react-router-dom'

const ElementoLista = ({ link, title, isReactRouter, target }) => {
    if (isReactRouter) {
        if (target === '_blank')
            return (
                <StyledElementoLista>
                    <Link to={link} target='_blank' rel='noopener noreferrer'>
                        <span>{title}</span>
                    </Link>
                </StyledElementoLista>
            )

        return (
            <StyledElementoLista>
                <Link to={link}>
                    <span>{title}</span>
                </Link>
            </StyledElementoLista>
        )
    }

    return (
        <StyledElementoLista>
            <a href={link}>
                <span>{title}</span>
            </a>
        </StyledElementoLista>
    )
}

export default ElementoLista
