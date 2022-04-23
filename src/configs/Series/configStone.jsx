import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/STONE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/STONE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configSTONE = {
    titulo: 'DO&STONE',
    descripcion:
        'La serie ARQUITEC es el resultado de la innovación y la funcionalidad, la unión entre la técnica más avanzada y versatilidad. Los formatos de la colección, sus tonalidades neutras y su aspecto monocromático, le permite protagonizar cualquier espacio.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&STONE Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-STONE_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Black',
        },
        {
            imagen: muestras[1],
            titulo: 'Light',
        },
        {
            imagen: muestras[2],
            titulo: 'Granit',
        },
        {
            imagen: muestras[3],
            titulo: 'White',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configSTONE
