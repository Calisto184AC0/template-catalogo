import Dolcker from '../../../modules/EN/03_Dolcker'
import Indice from '../../../modules/EN/02_Indice'
import Introduccion from '../../../modules/EN/01_Introduccion'
import Ventajas from '../../../modules/EN/04_Ventajas'
import Aplicaciones from '../../../modules/EN/05_Aplicaciones'
import Disenos from '../../../modules/EN/06_Diseno'
import Caracteristicas from '../../../modules/EN/07_Caracteristicas'
import Sistemas from '../../../modules/EN/08_Sistemas'
import Descargas from '../../../modules/EN/09_Descargas'
import Final from '../../../modules/EN/10_Final'
import { useRef } from 'react'

const FachadaVentiladaEn = () => {
    const indiceRef = useRef()

    return (
        <>
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
                    'dol-tc10',
                    'dol-tc14',
                    'dol-hc20',
                ]}
            />
            <Descargas id='descargas' />
            <Final />
        </>
    )
}

export default FachadaVentiladaEn
