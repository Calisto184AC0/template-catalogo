import getDataFromModules from '../../helpers/getDataFromModules'

const ejemplosImports = import.meta.globEager(
    '../../assets/images/Series/CRETE/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/CRETE/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ejemplos = getDataFromModules(ejemplosImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configCRETE = {
    titulo: 'DO&CRETE',
    descripcion:
        'Materia viva, que atrae diseñadores y proyectistas por su modo de presentarse y cambia según los reflejos de la luz, creando materias nuevas y sorprendentes.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&CRETE Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-CRETE_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Blanco',
        },
        {
            imagen: muestras[1],
            titulo: 'Gris',
        },
        {
            imagen: muestras[2],
            titulo: 'Negro',
        },
        {
            imagen: muestras[3],
            titulo: 'Taupe',
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
