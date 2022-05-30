import getDataFromModules from '../../helpers/getDataFromModules'
import imgSeleccionar from '../../assets/images/Series/DOLM/YDRAY-Dolcker-DOLMEN_OK_seleccionar.webp'

const ambientesImports = import.meta.globEager(
    '../../assets/images/Series/DOLM/AMBIENTES/**'
)

const muestrasImports = import.meta.globEager(
    '../../assets/images/Series/DOLM/DESPIECE/**'
)

const acabadosImports = import.meta.globEager('../../assets/icons/acabados/**')

const ambientes = getDataFromModules(ambientesImports)
const muestras = getDataFromModules(muestrasImports)
const acabados = getDataFromModules(acabadosImports)

const configDOLM = {
    titulo: 'DO&DOLM',
    descripcion:
        'Del deseo de redescubrir la esencia de los materiales originales y sus detalles, nace esta colección efecto piedra que interpreta y vuelve a proponer el aspecto mineral y masivo de una materia que resiste a lo largo del tiempo. La naturaleza se convierte en fuente de inspiración para estas cerámicas de efecto piedra y se plasma en los colores y en las combinaciones para crear el perfecto equilibrio.',
    imgSeleccionar,
    indicadores: [
        {
            top: '32%',
            left: '20%',
            ambiente: {
                imagen: ambientes[0],
                titulo: 'DOLCKER &CLIP. Do&Dolm Gris',
            },
        },
        {
            top: '10%',
            left: '20%',
            ambiente: {
                imagen: ambientes[1],
                titulo: '',
            },
        },
        {
            top: '55%',
            left: '20%',
            ambiente: {
                imagen: ambientes[2],
                titulo: '',
            },
        },
        {
            top: '75%',
            left: '20%',
            ambiente: {
                imagen: ambientes[3],
                titulo: '',
            },
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
        {
            imagen: acabados[1],
            titulo: 'Honed',
        },
        {
            imagen: acabados[2],
            titulo: 'Mate',
        },
    ],
}

export default configDOLM
