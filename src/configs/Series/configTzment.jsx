import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/TZMENT/YDRAY-Dolcker-ZEMENT_OK.webp'
import getFoldersFromModules from '../../helpers/getFoldersFromModules'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/TZMENT/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/TZMENT/DESPIECE/**'
)

const muestrasAcabadosImports = import.meta.globEager(
    '../../assets/images/Series/TZMENT/MUESTRAS_ACABADOS/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = getFoldersFromModules(muestrasAcabadosImports)

const configTZMENT = {
    titulo: 'DO&TZMENT',
    descripcion: '',
    imgSeleccionar,
    indicadores: [
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP Do&Tzment White',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '36%',
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
            titulo: 'Black',
            acabados: muestrasAcabados['BLACK'],
        },
        {
            imagen: muestras[1],
            titulo: 'Coal',
            acabados: muestrasAcabados['COAL'],
        },
        {
            imagen: muestras[2],
            titulo: 'Steel',
            acabados: muestrasAcabados['STEEL'],
        },
        {
            imagen: muestras[3],
            titulo: 'White',
            acabados: muestrasAcabados['WHITE'],
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

export default configTZMENT
