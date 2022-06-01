import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/WOOD/Dolcker WOOD_seleccionar.webp'
import getFoldersFromModules from '../../helpers/getFoldersFromModules'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/DESPIECE/**'
)

const muestrasAcabadosImports = import.meta.globEager(
    '../../assets/images/Series/WOOD/MUESTRAS_ACABADOS/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = getFoldersFromModules(muestrasAcabadosImports)

const configWOOD = {
    titulo: 'DO&WOOD',
    descripcion:
        'El color natural de la madera devuelve al espacio urbano la vitalidad de una vida intensa y cargada de emoción, en armonía total con el ambiente.',
    imgSeleccionar,
    indicadores: [
        {
            top: '7%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOL TC14. Do&Wood Encina - Eucalipto',
            },
        },
        {
            top: '43%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '80%',
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
            titulo: 'Abedul',
            acabados: muestrasAcabados['ABEDUL'],
        },
        {
            imagen: muestras[1],
            titulo: 'Encina',
            acabados: muestrasAcabados['ENCINA'],
        },
        {
            imagen: muestras[2],
            titulo: 'Eucalipto',
            acabados: muestrasAcabados['EUCALIPTO'],
        },
        {
            imagen: muestras[3],
            titulo: 'Manzano',
            acabados: muestrasAcabados['MANZANO'],
        },
        {
            imagen: muestras[4],
            titulo: 'Sauce',
            acabados: muestrasAcabados['SAUCE'],
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

export default configWOOD
