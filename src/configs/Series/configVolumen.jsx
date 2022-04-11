import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/VOLUMEN/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/VOLUMEN/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../assets/images/Series/VOLUMEN/acabados/**'
)

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configVOLUMEN = {
    titulo: 'DO&VOLUMEN',
    descripcion: '',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&VOLUMEN Mango - Azul - Grafíto - White',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: '',
        },
        {
            imagen: muestras[1],
            titulo: '',
        },
        {
            imagen: muestras[2],
            titulo: '',
        },
        {
            imagen: muestras[3],
            titulo: '',
        },
        {
            imagen: muestras[4],
            titulo: '',
        },
        {
            imagen: muestras[5],
            titulo: '',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configVOLUMEN
