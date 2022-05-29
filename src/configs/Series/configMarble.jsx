import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/MARBLE/Dolcker MARBLE STONE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configMARBLE = {
    titulo: 'DO&MARBLE',
    descripcion:
        'Natural como las piedras que han forjado la historia de la arquitectura, Time porque es este el tiempo de la perfección estructural y estética. El privilegio de una colección innovadora que supera las imperfecciones y los excesos de la referencia natural en la que cada placa cuenta una historia hecha de diseño y funcionalidad.',
    imgSeleccionar,
    indicadores: [
        {
            top: '32%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOL TC14. Do&Marble + DoPortland Negro',
            },
        },
        {
            top: '55%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '10%',
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
            titulo: 'Calacatta',
        },
        {
            imagen: muestras[1],
            titulo: 'Crema',
        },
        {
            imagen: muestras[2],
            titulo: 'Lava',
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
            imagen: acabados[2],
            titulo: 'Mate',
        },
    ],
}

export default configMARBLE
