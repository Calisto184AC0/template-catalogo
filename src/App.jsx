import Dolcker from './modules/03_Dolcker'
import Indice from './modules/02_Indice'
import Introduccion from './modules/01_Introduccion'

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
