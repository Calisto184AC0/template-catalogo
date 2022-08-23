import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/MARBLE/Dolcker MARBLE STONE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/DESPIECE/**'
)

const muestrasCALACATTAImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/MUESTRAS_ACABADOS/CALACATTA/**'
)
const muestrasCREMAImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/MUESTRAS_ACABADOS/CREMA/**'
)
const muestrasLAVAImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/MUESTRAS_ACABADOS/LAVA/**'
)
const muestrasGREYImports = import.meta.globEager(
    '../../assets/images/Series/MARBLE/MUESTRAS_ACABADOS/GREY/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)
const muestrasAcabados = {
    CALACATTA: getDataFromModules(muestrasCALACATTAImports),
    CREMA: getDataFromModules(muestrasCREMAImports),
    LAVA: getDataFromModules(muestrasLAVAImports),
    GREY: getDataFromModules(muestrasGREYImports),
}

const configMARBLE = {
    titulo: 'DO&MARBLE',
    descripcion:
        'Natural como las piedras que han forjado la historia de la arquitectura, Time porque es este el tiempo de la perfección estructural y estética. El privilegio de una colección innovadora que supera las imperfecciones y los excesos de la referencia natural en la que cada placa cuenta una historia hecha de diseño y funcionalidad.',
    imgSeleccionar,
    indicadores: [
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Marble Crema',
            },
        },
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Marble Lava',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Marble Calacatta',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Marble Grey',
            },
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Calacatta',
            acabados: muestrasAcabados['CALACATTA'],
        },
        {
            imagen: muestras[1],
            titulo: 'Crema',
            acabados: muestrasAcabados['CREMA'],
        },
        {
            imagen: muestras[2],
            titulo: 'Lava',
            acabados: muestrasAcabados['LAVA'],
        },
        {
            imagen: muestras[3],
            titulo: 'Grey',
            acabados: muestrasAcabados['GREY'],
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

export default configMARBLE
