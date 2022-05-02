import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/PORTLAND/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/PORTLAND/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configPORTLAND = {
    titulo: 'DO&PORTLAND',
    descripcion:
        'El cemento constituyen, para la arquitectura y el diseño, un recurso estético y de proyecto, un material que permite crear efectos espectaculares pero también espacios minimalistas, con una gran versatilidad de materiales y composición.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOL TC14. Do&Portland Blanco- Gris - Nacar - Taupe',
        },
        {
            imagen: ejemplos[1],
            titulo: '',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Blanco',
        },
        {
            imagen: muestras[1],
            titulo: 'Gris',
        },
        {
            imagen: muestras[2],
            titulo: 'Nacar',
        },
        {
            imagen: muestras[3],
            titulo: 'Negro',
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
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
        {
            imagen: acabados[2],
            titulo: 'Mate',
        },
    ],
}

export default configPORTLAND
