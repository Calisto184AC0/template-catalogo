import Dolcker from './modules/03_Dolcker'
import Indice from './modules/02_Indice'
import Introduccion from './modules/01_Introduccion'
import Ventajas from './modules/04_Ventajas'
import Aplicaciones from './modules/05_Aplicaciones'

const App = () => {
    return (
        <>
            <Introduccion />
            <Indice id='indice' />
            <Dolcker id='dolcker' />
            <Ventajas id='ventajas' />
            <Aplicaciones
                id={[
                    'aplicaciones',
                    'rehabilitacion',
                    'obra-nueva',
                    'fachadas',
                    'terrazas',
                ]}
            />
        </>
    )
}

export default App
