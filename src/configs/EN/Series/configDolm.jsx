import getDataFromModules from '../../../helpers/getDataFromModules'
import imgSeleccionar from '../../../assets/images/Series/DOLM/YDRAY-Dolcker-DOLMEN_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/DOLM/AMBIENTES/**'
)
const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/DOLM/DESPIECE/**'
)
const muestrasBEIGEImport = import.meta.globEager(
    '../../../assets/images/Series/DOLM/MUESTRAS_ACABADOS/BEIGE/**'
)
const muestrasBLACKImport = import.meta.globEager(
    '../../../assets/images/Series/DOLM/MUESTRAS_ACABADOS/BLACK/**'
)
const muestrasGRAFITOImport = import.meta.globEager(
    '../../../assets/images/Series/DOLM/MUESTRAS_ACABADOS/GRAFITO/**'
)
const muestrasGRISImport = import.meta.globEager(
    '../../../assets/images/Series/DOLM/MUESTRAS_ACABADOS/BEIGE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    BEIGE: getDataFromModules(muestrasBEIGEImport),
    BLACK: getDataFromModules(muestrasBLACKImport),
    GRIS: getDataFromModules(muestrasGRAFITOImport),
    GRAFITO: getDataFromModules(muestrasGRISImport),
}

const configDOLM = {
    titulo: 'DO&DOLM',
    descripcion:
        'From the desire to rediscover the essence of the original materials and their details, this stone-effect collection was born that interprets and re-proposes the mineral and massive aspect of a material that resists over time. Nature becomes a source of inspiration for these stone-effect ceramics and is reflected in the colors and combinations to create the perfect balance.',
    imgSeleccionar,
    indicadores: [
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Dolm Beige',
            },
        },
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Dolm Grafito',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Dolm Gris',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Dolm Nacar',
            },
        },
    ],
    // esta mal
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
            acabados: muestrasAcabados['BEIGE'],
        },
        {
            imagen: muestras[1],
            titulo: 'Grafito',
            acabados: muestrasAcabados['BLACK'],
        },
        {
            imagen: muestras[2],
            titulo: 'Gris',
            acabados: muestrasAcabados['GRIS'],
        },
        {
            imagen: muestras[3],
            titulo: 'Nacar',
            acabados: muestrasAcabados['GRAFITO'],
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

export default configDOLM
