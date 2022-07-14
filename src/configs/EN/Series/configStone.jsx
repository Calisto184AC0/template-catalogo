import getDataFromModules from '../../../helpers/getDataFromModules'

import imgSeleccionar from '../../../assets/images/Series/STONE/Dolcker NATURAL STONE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../../assets/images/Series/STONE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../../assets/images/Series/STONE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager(
    '../../../assets/icons/acabados/**'
)

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configSTONE = {
    titulo: 'DO&STONE',
    descripcion:
        'The STONE series is the result of innovation and functionality, the union between the most advanced technique and versatility. The formats of the collection, its neutral tones and its monochrome appearance, allow it to be the star of any space.',
    imgSeleccionar,
    indicadores: [
        {
            top: '36%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'Do&Stone Black',
            },
        },
        {
            top: '81%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: 'Do&Stone Granit',
            },
        },
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: 'Do&Stone Light',
            },
        },
        {
            top: '59%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: 'Do&Stone White',
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
