import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/TERRAZO/Dolcker TERRAZO_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/TERRAZO/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/TERRAZO/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configTERRAZO = {
    titulo: 'DO&TERRAZO',
    descripcion: 'Detalles gráficos que se inspiran en el Modernismo.',
    imgSeleccionar,
    indicadores: [
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Terrazo Beige - Silver',
            },
        },
        {
            top: '60%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '7%',
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
        {
            top: '43%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: '',
            },
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

export default configTERRAZO
