import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/QUARCITY/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/QUARCITY/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configQUARCITY = {
    titulo: 'DO&QUARCITY',
    descripcion:
        'Efecto piedra que vuelve a interpretar la elegancia de una superficie con gran fuerza de materiales. Formas y combinaciones cromáticas, seleccionadas por las mejores referencias del mundo natural, son los puntos fuertes de superficies únicas con un efecto de mezcla aleatoria pero controlada.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP. Do&Quarcity Gris',
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
        {
            imagen: acabados[1],
            titulo: 'Honed',
        },
    ],
}

export default configQUARCITY
