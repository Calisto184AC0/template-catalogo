import getDataFromModules from '../../../../helpers/getDataFromModules'

const fondosImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Fondos/K/**'
)
const selectoresImport = import.meta.globEager(
    '../../../../assets/images/VolumenVariacion/Selectores/K/**'
)

const fondos = getDataFromModules(fondosImport)
const selectores = getDataFromModules(selectoresImport)

const configK = {
    coord: {
        x1: '67.448%',
        y1: '33.308%',
        x2: '90%%',
        y2: '49.923%',
    },
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Without part',
                primerPlano: '',
                quitarFondo: true,
            },
            {
                selectorImg: selectores[0],
                titulo: 'Part 1',
                primerPlano: fondos[0],
            },
            {
                selectorImg: selectores[1],
                titulo: 'Part 2',
                primerPlano: fondos[1],
            },
            {
                selectorImg: selectores[2],
                titulo: 'Part 3',
                primerPlano: fondos[2],
            },
            {
                selectorImg: selectores[3],
                titulo: 'Part 4',
                primerPlano: fondos[3],
            },
            {
                selectorImg: selectores[4],
                titulo: 'Part 5',
                primerPlano: fondos[4],
            },
            {
                selectorImg: selectores[5],
                titulo: 'Part 6',
                primerPlano: fondos[5],
            },
            {
                selectorImg: selectores[6],
                titulo: 'Part 7',
                primerPlano: fondos[6],
            },
            {
                selectorImg: selectores[7],
                titulo: 'Part 8',
                primerPlano: fondos[7],
            },
            {
                selectorImg: selectores[8],
                titulo: 'Part 9',
                primerPlano: fondos[8],
            },
        ],
    },
}

export default configK