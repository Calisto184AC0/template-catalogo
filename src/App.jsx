import Dolcker from './modules/Dolcker'
import Indice from './modules/Indice'
import Introduccion from './modules/Introduccion'

const App = () => {
    return (
        <>
            <Introduccion />
            <Indice />
            <Dolcker id='dolcker' />
        </>
    )
}

export default App
