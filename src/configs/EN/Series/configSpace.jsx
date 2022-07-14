import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/SPACE/Dolcker SPACE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/DESPIECE/**'
)

const muestrasBLACKmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/BLACK/**'
)
const muestrasDARKmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/DARK/**'
)
const muestrasIVORYmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/IVORY/**'
)
const muestrasSOFTmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/SOFT/**'
)
const muestrasTAUPEmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/TAUPE/**'
)
const muestrasWHITEmports = import.meta.globEager(
    '../../../assets/images/Series/SPACE/MUESTRAS_ACABADOS/WHITE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BLACK: getDataFromModules(muestrasBLACKmports),
    DARK: getDataFromModules(muestrasDARKmports),
    IVORY: getDataFromModules(muestrasIVORYmports),
    SOFT: getDataFromModules(muestrasSOFTmports),
    TAUPE: getDataFromModules(muestrasTAUPEmports),
    WHITE: getDataFromModules(muestrasWHITEmports),
}

const configSPACE = {
    titulo: 'DO&SPACE',
    descripcion:
        'The elegance of simplicity, a timeless style, minimalism that becomes expressive language.',
    imgSeleccionar,
    indicadores: [
        {
            top: '5%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Space Ivory',
            },
        },
        {
            top: '21%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Space Dark',
            },
        },
        {
            top: '37%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Space Black',
            },
        },
        {
            top: '54%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Space White',
            },
        },
        {
            top: '71%',
            left: '20%',
            ambiente: {
                imagen: ambientes[4],
                titulo: 'Do&Space Soft',
            },
        },
        {
            top: '86%',
            left: '20%',
            ambiente: {
                imagen: ambientes[5],
                titulo: 'Do&Space Taupe',
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
            titulo: 'Dark',
            acabados: muestrasAcabados['DARK'],
        },
        {
            imagen: muestras[2],
            titulo: 'Ivory',
            acabados: muestrasAcabados['IVORY'],
        },
        {
            imagen: muestras[3],
            titulo: 'Soft',
            acabados: muestrasAcabados['SOFT'],
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
            acabados: muestrasAcabados['TAUPE'],
        },
        {
            imagen: muestras[5],
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
            titulo: 'Matte',
        },
    ],
}

export default configSPACE
