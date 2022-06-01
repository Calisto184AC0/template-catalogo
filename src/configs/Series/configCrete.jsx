import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/CRETE/YDRAY-Dolcker-CRETE_OK_seleccionar.webp'
import getFoldersFromModules from '../../helpers/getFoldersFromModules'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/CRETE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/CRETE/DESPIECE/**'
)

const muestrasAcabadosImports = import.meta.globEager(
    '../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = getFoldersFromModules(muestrasAcabadosImports)

const configCRETE = {
    titulo: 'DO&CRETE',
    descripcion:
        'Materia viva, que atrae diseñadores y proyectistas por su modo de presentarse y cambia según los reflejos de la luz, creando materias nuevas y sorprendentes.',
    imgSeleccionar,
    indicadores: [
        {
            top: '12%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Crete Blanco',
            },
        },
        {
            top: '80%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '60%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '35%',
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
            titulo: 'Blanco',
            acabados: muestrasAcabados['BLANCO'],
        },
        {
            imagen: muestras[1],
            titulo: 'Gris',
            acabados: muestrasAcabados['GRIS'],
        },
        {
            imagen: muestras[2],
            titulo: 'Negro',
            acabados: muestrasAcabados['NEGRO'],
        },
        {
            imagen: muestras[3],
            titulo: 'Taupe',
            acabados: muestrasAcabados['TAUPE'],
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

export default configCRETE
