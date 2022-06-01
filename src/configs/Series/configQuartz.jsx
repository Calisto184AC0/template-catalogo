import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/QUARTZ/YDRAY-Dolcker-QUARTZ-_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/QUARTZ/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/QUARTZ/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configQUARTZ = {
    titulo: 'DO&QUARTZ',
    descripcion:
        'Efecto piedra caracterizada por una destonalización que recrea la auténtica heterogeneidad del elemento natural.',
    imgSeleccionar,
    indicadores: [
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Dquarz Grey - Black',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: '',
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
