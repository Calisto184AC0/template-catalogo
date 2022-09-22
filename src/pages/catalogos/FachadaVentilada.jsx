import Dolcker from '../../modules/03_Dolcker'
import Indice from '../../modules/02_Indice'
import Introduccion from '../../modules/01_Introduccion'
import Ventajas from '../../modules/04_Ventajas'
import Aplicaciones from '../../modules/05_Aplicaciones'
import Disenos from '../../modules/06_Diseno'
import Caracteristicas from '../../modules/07_Caracteristicas'
import Sistemas from '../../modules/08_Sistemas'
import Descargas from '../../modules/09_Descargas'
import Final from '../../modules/10_Final'
import { useRef } from 'react'
import MultipleOptionsProvider from '../../contexts/MultipleOptionsContext'

const FachadaVentilada = () => {
    const indiceRef = useRef()

    return (
        <MultipleOptionsProvider>
            <Introduccion indiceRef={indiceRef} />
            <Indice id='indice' indiceRef={indiceRef} />
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
            <Disenos
                id={[
                    'diseno',
                    'formato',
                    'despiece',
                    'acabados',
                    'espesores',
                    'piezas',
                    'series',
                ]}
            />
            <Caracteristicas
                id={['caracteristicas-especiales', 'datos-tecnicos']}
            />
            <Sistemas
                id={[
                    'sistemas',
                    'dolcker-and-clip',
                    'dol-tc11',
                    'dol-tc14',
                    'dol-hc20',
                ]}
            />
            <Descargas id='descargas' />
            <Final />
        </MultipleOptionsProvider>
    )
}

export default FachadaVentilada
