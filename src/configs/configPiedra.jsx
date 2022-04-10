const ejemplosImports = import.meta.glob(
    '../assets/images/Series/Cemento/ejemplos/*.png'
)

const muestrasImports = import.meta.glob(
    '../assets/images/Series/Cemento/muestras/*.png'
)

const acabadosImports = import.meta.glob(
    '../assets/images/Series/Cemento/acabados/*.png'
)

const execPromises = async imports => {
    const promises = Object.values(imports).map(importFunc => importFunc())
    const modules = await Promise.all(promises)
    return modules.map(elem => elem.default)
}

const ejemplos = await execPromises(ejemplosImports)
const muestras = await execPromises(muestrasImports)
const acabados = await execPromises(acabadosImports)

const config = {
    titulo: 'DO&BASALT',
    descripcion:
        'Una sugestiva reinterpretación de basalto en Dolcker: elegantes matices, detalles minuciosos y suaves veteados se obtienen con las tecnologías de producción más modernas y reproducen fielmente las variables cromáticas del producto natural.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOL -TC14. Do&Quarz Grey / Do&Quarz Black',
        },
        {
            imagen: ejemplos[1],
            titulo: 'DOL -TC14. Do&Quarz Grey / Do&Quarz Black',
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
            titulo: 'Gray',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default config
