import getDataFromModules from '../../helpers/getDataFromModules'

import imgSeleccionar from '../../assets/images/Series/STONE/Dolcker NATURAL STONE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/STONE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/STONE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configSTONE = {
    titulo: 'DO&STONE',
    descripcion:
        'La serie ARQUITEC es el resultado de la innovación y la funcionalidad, la unión entre la técnica más avanzada y versatilidad. Los formatos de la colección, sus tonalidades neutras y su aspecto monocromático, le permite protagonizar cualquier espacio.',
    imgSeleccionar,
    indicadores: [
        {
            top: '32%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Stone Natural Granit',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '55%',
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
        },
        {
            imagen: muestras[1],
            titulo: 'Light',
        },
        {
            imagen: muestras[2],
            titulo: 'Granit',
        },
        {
            imagen: muestras[3],
            titulo: 'White',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configSTONE
