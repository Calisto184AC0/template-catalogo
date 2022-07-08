import getDataFromModules from '../../../helpers/getDataFromModules'

const fondosImport = import.meta.globEager(
    '../../../assets/images/VolumenVariacion/Fondos/X/**'
)
const selectoresImport = import.meta.globEager(
    '../../../assets/images/VolumenVariacion/Selectores/X/**'
)

const fondos = getDataFromModules(fondosImport)
const selectores = getDataFromModules(selectoresImport)

const configX = {
    coord: {
        x1: '67.448%',
        y1: '83.385%',
        x2: '90%',
        y2: '100%',
    },
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Sin pieza',
                primerPlano: '',
                quitarFondo: true,
            },
            {
                selectorImg: selectores[0],
                titulo: 'Pieza 1',
                primerPlano: fondos[0],
            },
            {
                selectorImg: selectores[1],
                titulo: 'Pieza 2',
                primerPlano: fondos[1],
            },
            {
                selectorImg: selectores[2],
                titulo: 'Pieza 3',
                primerPlano: fondos[2],
            },
            {
                selectorImg: selectores[3],
                titulo: 'Pieza 4',
                primerPlano: fondos[3],
            },
            {
                selectorImg: selectores[4],
                titulo: 'Pieza 5',
                primerPlano: fondos[4],
            },
            {
                selectorImg: selectores[5],
                titulo: 'Pieza 6',
                primerPlano: fondos[5],
            },
            {
                selectorImg: selectores[6],
                titulo: 'Pieza 7',
                primerPlano: fondos[6],
            },
            {
                selectorImg: selectores[7],
                titulo: 'Pieza 8',
                primerPlano: fondos[7],
            },
            {
                selectorImg: selectores[8],
                titulo: 'Pieza 9',
                primerPlano: fondos[8],
            },
        ],
    },
}

export default configX
