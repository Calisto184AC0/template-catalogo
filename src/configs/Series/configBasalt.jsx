const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/BASALT/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/BASALT/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/BASALT/acabados/**'
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

const configBASALT = {
    titulo: 'DO&BASALT',
    descripcion:
        'Una sugestiva reinterpretación de basalto en Dolcker: elegantes matices, detalles minuciosos y suaves veteados se obtienen con las tecnologías de producción más modernas y reproducen fielmente las variables cromáticas del producto natural.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&BASALT Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-BASALT_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
        },
        {
            imagen: muestras[1],
            titulo: 'Graphite',
        },
        {
            imagen: muestras[2],
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

export default configBASALT
