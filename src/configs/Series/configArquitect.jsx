const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/ARQUITECT/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/ARQUITECT/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/ARQUITECT/acabados/**'
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

const configArquitect = {
    titulo: 'DO&ARQUITECT',
    descripcion:
        'La serie ARQUITECT es el resultado de la innovación y la funcionalidad, la unión entre la técnica más avanzada y versatilidad. Los formatos de la colección, sus tonalidades neutras y su aspecto monocromático, le permite protagonizar cualquier espacio.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&Arquitect Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-ARQUITECT_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Amarillo',
        },
        {
            imagen: muestras[1],
            titulo: 'Azul',
        },
        {
            imagen: muestras[2],
            titulo: 'Blanco',
        },
        {
            imagen: muestras[3],
            titulo: 'Ceniza',
        },
        {
            imagen: muestras[4],
            titulo: 'Grafito',
        },
        {
            imagen: muestras[5],
            titulo: 'Gris',
        },
        {
            imagen: muestras[6],
            titulo: 'Malva',
        },
        {
            imagen: muestras[7],
            titulo: 'Mango',
        },
        {
            imagen: muestras[8],
            titulo: 'Negro',
        },
        {
            imagen: muestras[9],
            titulo: 'Rojo',
        },
        {
            imagen: muestras[10],
            titulo: 'Turquesa',
        },
        {
            imagen: muestras[11],
            titulo: 'Verde',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configArquitect
