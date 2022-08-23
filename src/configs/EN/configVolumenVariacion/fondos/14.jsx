import getDataFromModules from '../../../../helpers/getDataFromModules'

const fondosImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Fondos/N/**'
)
const selectoresImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Iconos/**'
)

const fondos = getDataFromModules(fondosImport)
const selectores = getDataFromModules(selectoresImport)

const configN = {
    coord: {
        x1: '44.896%',
        y1: '49.923%',
        x2: '67.448%',
        y2: '66.692%',
    },
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Without part',
                primerPlano: '',
            },
            {
                selectorImg: selectores[1],
                titulo: 'Part 1',
                primerPlano: fondos[0],
            },
            {
                selectorImg: selectores[2],
                titulo: 'Part 2',
                primerPlano: fondos[1],
            },
            {
                selectorImg: selectores[3],
                titulo: 'Part 3',
                primerPlano: fondos[2],
            },
            {
                selectorImg: selectores[4],
                titulo: 'Part 4',
                primerPlano: fondos[3],
            },
            {
                selectorImg: selectores[5],
                titulo: 'Part 5',
                primerPlano: fondos[4],
            },
            {
                selectorImg: selectores[6],
                titulo: 'Part 6',
                primerPlano: fondos[5],
            },
            {
                selectorImg: selectores[7],
                titulo: 'Part 7',
                primerPlano: fondos[6],
            },
            {
                selectorImg: selectores[8],
                titulo: 'Part 8',
                primerPlano: fondos[7],
            },
            {
                selectorImg: selectores[9],
                titulo: 'Part 9',
                primerPlano: fondos[8],
            },
        ],
    },
}

export default configN
