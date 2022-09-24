import { useRef } from 'react'
import MultipleOptionsProvider from '../../contexts/MultipleOptionsContext'
import {
    Aplicaciones,
    Caracteristicas,
    Descargas,
    Dolcker,
    Final,
    Indice,
    Introduccion,
    Sistemas,
    Ventajas,
} from '../../modules'
import Disenos from '../../modules/06_Diseno'

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
