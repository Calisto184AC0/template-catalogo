const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/CRETE/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/CRETE/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/AQUITECT/acabados/**'
)

const execPromises = async imports => {
    const promises = Object.values(imports).map(importFunc => importFunc())
    const modules = await Promise.all(promises)
    return modules.map(elem => elem.default)
}

const ejemplos = await execPromises(ejemplosImports)
const muestras = await execPromises(muestrasImports)
const acabados = await execPromises(acabadosImports)

console.log(ejemplos)

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
    ],
}

export default configCRETE
