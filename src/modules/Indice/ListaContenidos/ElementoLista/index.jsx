import StyledElementoLista from './styles'

const ElementoLista = ({ link, title }) => {
    return (
        <StyledElementoLista>
            <a href={link}>{title}</a>
        </StyledElementoLista>
    )
}

export default ElementoLista
