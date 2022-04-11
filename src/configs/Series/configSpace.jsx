const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/SPACE/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/SPACE/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/SPACE/acabados/**'
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

const configSPACE = {
    titulo: 'DO&SPACE',
    descripcion:
        'La elegancia de la simplicidad, un estilo atemporal, el minimalismo que se convierte en lenguaje expresivo.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&SPACE Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-SPACE_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Black',
        },
        {
            imagen: muestras[1],
            titulo: 'Dark',
        },
        {
            imagen: muestras[2],
            titulo: 'Ivory',
        },
        {
            imagen: muestras[3],
            titulo: 'Soft',
        },
        {
            imagen: muestras[4],
            titulo: 'Taupe',
        },
        {
            imagen: muestras[5],
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

export default configSPACE
