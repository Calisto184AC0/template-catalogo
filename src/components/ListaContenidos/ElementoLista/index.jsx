import StyledElementoLista from './styles'

const ElementoLista = ({ link, title }) => {
    return (
        <StyledElementoLista>
            <a href={link}>
                <span>{title}</span>
            </a>
        </StyledElementoLista>
    )
}

export default ElementoLista
