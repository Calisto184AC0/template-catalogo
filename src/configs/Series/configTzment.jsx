const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/TZMENT/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/TZMENT/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/TZMENT/acabados/**'
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

const configTZMENT = {
    titulo: 'DO&TZMENT',
    descripcion: '',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&TZMENT Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-TZMENT_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Black',
        },
        {
            imagen: muestras[1],
            titulo: 'Coal',
        },
        {
            imagen: muestras[2],
            titulo: 'Steel',
        },
        {
            imagen: muestras[3],
            titulo: 'White',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configTZMENT
