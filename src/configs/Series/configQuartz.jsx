const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/QUARTZ/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/QUARTZ/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/QUARTZ/acabados/**'
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

const configQUARTZ = {
    titulo: 'DO&QUARTZ',
    descripcion:
        'Efecto piedra caracterizada por una destonalización que recrea la auténtica heterogeneidad del elemento natural.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&QUARTZ Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-QUARTZ_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
        },
        {
            imagen: muestras[1],
            titulo: 'Black',
        },
        {
            imagen: muestras[2],
            titulo: 'Graphite',
        },
        {
            imagen: muestras[3],
            titulo: 'Grey',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configQUARTZ
