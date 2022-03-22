import Dolcker from './modules/03_Dolcker'
import Indice from './modules/02_Indice'
import Introduccion from './modules/01_Introduccion'
import Ventajas from './modules/04_Ventajas'

const App = () => {
    return (
        <>
            <Introduccion />
            <Indice />
            <Dolcker id='dolcker' />
            <Ventajas id='ventajas' />
        </>
    )
}

export default App
