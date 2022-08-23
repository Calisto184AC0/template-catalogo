import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/TERRAZO/Dolcker TERRAZO_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/DESPIECE/**'
)

const muestrasBASICPROImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BASIC PRO/**'
)
const muestrasBASICImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BASIC/**'
)
const muestrasBEIGEImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/BEIGE/**'
)
const muestrasPEARLImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/PEARL/**'
)
const muestrasSILVERImports = import.meta.globEager(
    '../../../assets/images/Series/TERRAZO/MUESTRAS_ACABADOS/SILVER/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    'BASIC PRO': getDataFromModules(muestrasBASICPROImports),
    BASIC: getDataFromModules(muestrasBASICImports),
    BEIGE: getDataFromModules(muestrasBEIGEImports),
    PEARL: getDataFromModules(muestrasPEARLImports),
    SILVER: getDataFromModules(muestrasSILVERImports),
}

const configTERRAZO = {
    titulo: 'DO&TERRAZO',
    descripcion: 'Graphic details inspired by Modernism.',
    imgSeleccionar,
    indicadores: [
        {
            top: '7%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Terrazo Beige + Silver ',
            },
        },
        {
            top: '23%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Terrazo Basic Pro + Silver ',
            },
        },
        {
            top: '45%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Terrazo Silver',
            },
        },
        {
            top: '63%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Terrazo Basic + Silver ',
            },
        },
        {
            top: '82%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Terrazo Pearl + Silver ',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Basic Pro',
            acabados: muestrasAcabados['BASIC PRO'],
        },
        {
            imagen: muestras[1],
            titulo: 'Basic',
            acabados: muestrasAcabados['BASIC'],
        },
        {
            imagen: muestras[2],
            titulo: 'Beige',
            acabados: muestrasAcabados['BEIGE'],
        },
        {
            imagen: muestras[3],
            titulo: 'Pearl',
            acabados: muestrasAcabados['PEARL'],
        },
        {
            imagen: muestras[4],
            titulo: 'Silver',
            acabados: muestrasAcabados['SILVER'],
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
            titulo: 'Matte',
        },
    ],
}

export default configTERRAZO
