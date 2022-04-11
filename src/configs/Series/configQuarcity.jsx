const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/QUARCITY/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/QUARCITY/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/QUARCITY/acabados/**'
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

const configQUARCITY = {
    titulo: 'DO&QUARCITY',
    descripcion:
        'Efecto piedra que vuelve a interpretar la elegancia de una superficie con gran fuerza de materiales. Formas y combinaciones cromáticas, seleccionadas por las mejores referencias del mundo natural, son los puntos fuertes de superficies únicas con un efecto de mezcla aleatoria pero controlada.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&QUARCITY Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-QUARCITY_OK2',
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

export default configQUARCITY
