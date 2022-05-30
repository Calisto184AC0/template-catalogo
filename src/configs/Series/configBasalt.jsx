import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configBASALT = {
    titulo: 'DO&BASALT',
    descripcion:
        'Una sugestiva reinterpretación de basalto en Dolcker: elegantes matices, detalles minuciosos y suaves veteados se obtienen con las tecnologías de producción más modernas y reproducen fielmente las variables cromáticas del producto natural.',
    imgSeleccionar,
    indicadores: [
        {
            top: '15%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Basalt Beige',
            },
        },
        {
            top: '70%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
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
            titulo: 'Graphite',
        },
        {
            imagen: muestras[2],
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

export default configBASALT
