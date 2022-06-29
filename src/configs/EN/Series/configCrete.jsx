import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/CRETE/YDRAY-Dolcker-CRETE_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/DESPIECE/**'
)

const muestrasBLANCOImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/BLANCO/**'
)
const muestrasGRISImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/GRIS/**'
)
const muestrasNEGROImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/NEGRO/**'
)
const muestrasTAUPEImports = import.meta.globEager(
    '../../../assets/images/Series/CRETE/MUESTRAS_ACABADOS/TAUPE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BLANCO: getDataFromModules(muestrasBLANCOImports),
    GRIS: getDataFromModules(muestrasGRISImports),
    NEGRO: getDataFromModules(muestrasNEGROImports),
    TAUPE: getDataFromModules(muestrasTAUPEImports),
}

const configCRETE = {
    titulo: 'DO&CRETE',
    descripcion:
        'Living material, which attracts designers and planners for its way of presenting itself and changes according to the reflections of light, creating new and surprising materials.',
    imgSeleccionar,
    indicadores: [
        {
            top: '12%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Crete Blanco',
            },
        },
        {
            top: '80%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Crete Gris',
            },
        },
        {
            top: '60%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Crete Negro',
            },
        },
        {
            top: '35%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Crete Taupe',
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
