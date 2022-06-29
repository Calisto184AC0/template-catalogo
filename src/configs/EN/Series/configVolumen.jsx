import getDataFromModules from '../../../helpers/getDataFromModules'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/VOLUMEN/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/VOLUMEN/DESPIECE/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)

const configVOLUMEN = {
    titulo: 'DO&VOLUMEN',
    descripcion: '',
    imgSeleccionar: '',
    indicadores: [
        {
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP.. Do&Volumen',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Part 1',
        },
        {
            imagen: muestras[1],
            titulo: 'Part 2',
        },
        {
            imagen: muestras[2],
            titulo: 'Part 3',
        },
        {
            imagen: muestras[3],
            titulo: 'Part 4',
        },
        {
            imagen: muestras[4],
            titulo: 'Part 5',
        },
        {
            imagen: muestras[5],
            titulo: 'Part 6',
        },
        {
            imagen: muestras[6],
            titulo: 'Part 7',
        },
        {
            imagen: muestras[7],
            titulo: 'Part 8',
        },
        {
            imagen: muestras[8],
            titulo: 'Part 9 (relieve de prensa)',
        },
    ],
}

export default configVOLUMEN
