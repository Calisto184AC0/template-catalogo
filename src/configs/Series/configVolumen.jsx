const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/VOLUMEN/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/VOLUMEN/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/VOLUMEN/acabados/**'
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

const configVOLUMEN = {
    titulo: 'DO&VOLUMEN',
    descripcion: '',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&VOLUMEN Mango - Azul - Grafíto - White',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: '',
        },
        {
            imagen: muestras[1],
            titulo: '',
        },
        {
            imagen: muestras[2],
            titulo: '',
        },
        {
            imagen: muestras[3],
            titulo: '',
        },
        {
            imagen: muestras[4],
            titulo: '',
        },
        {
            imagen: muestras[5],
            titulo: '',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configVOLUMEN
