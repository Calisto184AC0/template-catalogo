const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/MARBLE/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/MARBLE/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/MARBLE/acabados/**'
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

const configMARBLE = {
    titulo: 'DO&MARBLE',
    descripcion:
        'Natural como las piedras que han forjado la historia de la arquitectura, Time porque es este el tiempo de la perfección estructural y estética. El privilegio de una colección innovadora que supera las imperfecciones y los excesos de la referencia natural en la que cada placa cuenta una historia hecha de diseño y funcionalidad.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&MARBLE Mango - Azul - Grafíto - White',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Calacatta',
        },
        {
            imagen: muestras[1],
            titulo: 'Crema',
        },
        {
            imagen: muestras[2],
            titulo: 'Lava',
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

export default configMARBLE
