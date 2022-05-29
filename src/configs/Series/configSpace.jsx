import getDataFromModules from '../../helpers/getDataFromModules'

import imgSeleccionar from '../../assets/images/Series/SPACE/Dolcker SPACE_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/SPACE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/SPACE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configSPACE = {
    titulo: 'DO&SPACE',
    descripcion:
        'La elegancia de la simplicidad, un estilo atemporal, el minimalismo que se convierte en lenguaje expresivo.',
    imgSeleccionar,
    indicadores: [
        {
            top: '20%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP y DOL TC14. Do&Space White - Ivory',
            },
        },
        {
            top: '68%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '5%',
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
        {
            top: '51%',
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
            titulo: 'Black',
        },
        {
            imagen: muestras[1],
            titulo: 'Dark',
        },
        {
            imagen: muestras[2],
            titulo: 'Ivory',
        },
        {
            imagen: muestras[3],
            titulo: 'Soft',
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
        },
        {
            imagen: muestras[5],
            titulo: 'White',
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

export default configSPACE
