const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/PORTLAND/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/PORTLAND/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/PORTLAND/acabados/**'
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

const configPORTLAND = {
    titulo: 'DO&PORTLAND',
    descripcion:
        'El cemento constituyen, para la arquitectura y el diseño, un recurso estético y de proyecto, un material que permite crear efectos espectaculares pero también espacios minimalistas, con una gran versatilidad de materiales y composición.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&PORTLAND Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-PORTLAND_OK2',
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
            titulo: 'Nacar',
        },
        {
            imagen: muestras[3],
            titulo: 'Negro',
        },
        {
            imagen: muestras[4],
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

export default configPORTLAND
