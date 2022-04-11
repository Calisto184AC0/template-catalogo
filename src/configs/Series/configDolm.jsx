const ejemplosImports = import.meta.glob(
    '../../assets/images/Series/DOLM/AMBIENTES/**'
)

const muestrasImports = import.meta.glob(
    '../../assets/images/Series/DOLM/DESPIECE/**'
)

const acabadosImports = import.meta.glob(
    '../../assets/images/Series/DOLM/acabados/**'
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

const configDOLM = {
    titulo: 'DO&DOLM',
    descripcion:
        'Del deseo de redescubrir la esencia de los materiales originales y sus detalles, nace esta colección efecto piedra que interpreta y vuelve a proponer el aspecto mineral y masivo de una materia que resiste a lo largo del tiempo. La naturaleza se convierte en fuente de inspiración para estas cerámicas de efecto piedra y se plasma en los colores y en las combinaciones para crear el perfecto equilibrio.',
    ejemplos: [
        {
            imagen: ejemplos[0],
            titulo: 'DOLCKER &CLIP Do&DOLM Mango - Azul - Grafíto - White',
        },
        {
            imagen: ejemplos[1],
            titulo: 'YDRAY-Dolcker-DOLM_OK2',
        },
    ],
    muestras: [
        {
            imagen: muestras[0],
            titulo: 'Beige',
        },
        {
            imagen: muestras[1],
            titulo: 'Grafito',
        },
        {
            imagen: muestras[2],
            titulo: 'Gris',
        },
        {
            imagen: muestras[3],
            titulo: 'Nacar',
        },
    ],
    acabados: [
        {
            imagen: acabados[0],
            titulo: 'Flamed',
        },
    ],
}

export default configDOLM
