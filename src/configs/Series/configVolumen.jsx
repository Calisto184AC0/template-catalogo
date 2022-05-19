import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/VOLUMEN/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/VOLUMEN/DESPIECE/**'
)

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)

const configVOLUMEN = {
    titulo: 'DO&VOLUMEN',
    descripcion: '',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP.. Do&Volumen',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Pieza 1',
        },
        {
            imagen: muestras[1],
            titulo: 'Pieza 2',
        },
        {
            imagen: muestras[2],
            titulo: 'Pieza 3',
        },
        {
            imagen: muestras[3],
            titulo: 'Pieza 4',
        },
        {
            imagen: muestras[4],
            titulo: 'Pieza 5',
        },
        {
            imagen: muestras[5],
            titulo: 'Pieza 6',
        },
        {
            imagen: muestras[6],
            titulo: 'Pieza 7',
        },
        {
            imagen: muestras[7],
            titulo: 'Pieza 8',
        },
    ],
}

export default configVOLUMEN
