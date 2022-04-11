import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/acabados/**'
)

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configWOOD = {
    titulo: 'DO&WOOD',
    descripcion:
        'El color natural de la madera devuelve al espacio urbano la vitalidad de una vida intensa y cargada de emoción, en armonía total con el ambiente.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&WOOD Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-WOOD_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Abedul',
        },
        {
            imagen: muestras[1],
            titulo: 'Encina',
        },
        {
            imagen: muestras[2],
            titulo: 'Eucalipto',
        },
        {
            imagen: muestras[3],
            titulo: 'Manzano',
        },
        {
            imagen: muestras[4],
            titulo: 'Saulce',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configWOOD
