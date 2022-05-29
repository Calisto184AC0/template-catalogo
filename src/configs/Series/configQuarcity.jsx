import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/QUARCITY/YDRAY-Dolcker-QUARCITY_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/QUARCITY/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/QUARCITY/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configQUARCITY = {
    titulo: 'DO&QUARCITY',
    descripcion:
        'Efecto piedra que vuelve a interpretar la elegancia de una superficie con gran fuerza de materiales. Formas y combinaciones cromáticas, seleccionadas por las mejores referencias del mundo natural, son los puntos fuertes de superficies únicas con un efecto de mezcla aleatoria pero controlada.',
    imgSeleccionar,
    indicadores: [
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Quarcity Gris',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '55%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '32%',
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
        {
            imagen: acabados[1],
            titulo: 'Honed',
        },
    ],
}

export default configQUARCITY
