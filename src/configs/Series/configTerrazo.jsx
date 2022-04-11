import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/TERRAZO/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/TERRAZO/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../assets/images/Series/TERRAZO/acabados/**'
)

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configTERRAZO = {
    titulo: 'DO&TERRAZO',
    descripcion: 'Detalles gráficos que se inspiran en el Modernismo.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&TERRAZO Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-TERRAZO_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Basic Pro',
        },
        {
            imagen: muestras[1],
            titulo: 'Basic',
        },
        {
            imagen: muestras[2],
            titulo: 'Beige',
        },
        {
            imagen: muestras[3],
            titulo: 'Pearl',
        },
        {
            imagen: muestras[4],
            titulo: 'Silver',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configTERRAZO
