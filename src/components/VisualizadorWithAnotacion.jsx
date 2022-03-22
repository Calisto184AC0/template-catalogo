import Anotacion from './Anotacion'

const VisualizadorWithAnotacion = ({ type, text, children }) => {
    return (
        <>
            <Anotacion type={type} text={text} />
            {children}
        </>
    )
}

export default VisualizadorWithAnotacion
