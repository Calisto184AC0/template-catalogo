import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/BASALT/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configBASALT = {
    titulo: 'DO&BASALT',
    descripcion:
        'Una sugestiva reinterpretación de basalto en Dolcker: elegantes matices, detalles minuciosos y suaves veteados se obtienen con las tecnologías de producción más modernas y reproducen fielmente las variables cromáticas del producto natural.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP. Do&Basalt Beige',
        },
        {
            imagen: ejemplos[1],
            titulo: '',
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
