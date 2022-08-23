import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/QUARTZ/YDRAY-Dolcker-QUARTZ-_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/QUARTZ/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/QUARTZ/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configQUARTZ = {
    titulo: 'DO&QUARTZ',
    descripcion:
        'Stone effect characterized by a shade variation that recreates the authentic heterogeneity of the natural element.',
    imgSeleccionar,
    indicadores: [
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Quartz Beige',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Quartz Black',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Quartz Graphite',
            },
        },
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Quartz Grey',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
        },
        {
            imagen: muestras[1],
            titulo: 'Black',
        },
        {
            imagen: muestras[2],
            titulo: 'Graphite',
        },
        {
            imagen: muestras[3],
            titulo: 'Grey',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configQUARTZ
