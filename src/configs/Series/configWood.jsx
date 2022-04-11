const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/WOOD/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/WOOD/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/WOOD/acabados/**'
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

const configWOOD = {
    titulo: 'DO&WOOD',
    descripcion:
        'El color natural de la madera devuelve al espacio urbano la vitalidad de una vida intensa y cargada de emoción, en armonía total con el ambiente.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&WOOD Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-WOOD_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Abedul',
        },
        {
            imagen: muestras[1],
            titulo: 'Encina',
        },
        {
            imagen: muestras[2],
            titulo: 'Eucalipto',
        },
        {
            imagen: muestras[3],
            titulo: 'Manzano',
        },
        {
            imagen: muestras[4],
            titulo: 'Saulce',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configWOOD
