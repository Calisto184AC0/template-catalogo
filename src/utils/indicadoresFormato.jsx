import { backgrounds, selects } from '../assets/images/Diseno/Formato'
import selectorFormato from '../assets/icons/formatos/formato.svg'

const config = {
    fachada: [
        {
            top: '50%',
            left: '45%',
            menu: {
                seleccionado: 0,
                selectores: [
                    {
                        selectorImg: selectorFormato,
                        titulo: 'Formato',
                        menu: {
                            seleccionado: 0,
                            selectores: [
                                {
                                    selectorImg: selects[0],
                                    titulo: '20x120',
                                    primerPlano: backgrounds[0],
                                },
                                {
                                    selectorImg: selects[1],
                                    titulo: '30x60',
                                    primerPlano: backgrounds[1],
                                },
                                {
                                    selectorImg: selects[2],
                                    titulo: '30x90',
                                    primerPlano: backgrounds[2],
                                },
                                {
                                    selectorImg: selects[3],
                                    titulo: '30x120',
                                    primerPlano: backgrounds[3],
                                },
                                {
                                    selectorImg: selects[4],
                                    titulo: '40x80',
                                    primerPlano: backgrounds[4],
                                },
                                {
                                    selectorImg: selects[5],
                                    titulo: '40x120',
                                    primerPlano: backgrounds[5],
                                },
                                {
                                    selectorImg: selects[6],
                                    titulo: '45x90',
                                    primerPlano: backgrounds[6],
                                },
                                {
                                    selectorImg: selects[7],
                                    titulo: '50x100',
                                    primerPlano: backgrounds[7],
                                },
                                {
                                    selectorImg: selects[8],
                                    titulo: '50x120',
                                    primerPlano: backgrounds[8],
                                },
                                {
                                    selectorImg: selects[9],
                                    titulo: '60x60',
                                    primerPlano: backgrounds[9],
                                },
                                {
                                    selectorImg: selects[10],
                                    titulo: '60x90',
                                    primerPlano: backgrounds[10],
                                },
                                {
                                    selectorImg: selects[11],
                                    titulo: '60x120',
                                    primerPlano: backgrounds[11],
                                },
                                {
                                    selectorImg: selects[12],
                                    titulo: '80x80',
                                    primerPlano: backgrounds[12],
                                },
                            ],
                        },
                    },
                    {
                        selectorImg: selects[13],
                        titulo: 'Multiformato',
                        menu: {
                            selectores: [
                                {
                                    selectorImg: selects[22],
                                    titulo: 'Largos libres',
                                    primerPlano: backgrounds[22],
                                },
                                {
                                    selectorImg: selects[13],
                                    titulo: 'Modular 1',
                                    primerPlano: backgrounds[13],
                                },
                                {
                                    selectorImg: selects[14],
                                    titulo: 'Modular 2',
                                    primerPlano: backgrounds[14],
                                },
                                {
                                    selectorImg: selects[15],
                                    titulo: 'Modular 3',
                                    primerPlano: backgrounds[15],
                                },
                                {
                                    selectorImg: selects[16],
                                    titulo: 'Modular 4',
                                    primerPlano: backgrounds[16],
                                },
                                {
                                    selectorImg: selects[17],
                                    titulo: 'Modular 5',
                                    primerPlano: backgrounds[17],
                                },
                                {
                                    selectorImg: selects[18],
                                    titulo: 'Modular 6',
                                    primerPlano: backgrounds[18],
                                },
                                {
                                    selectorImg: selects[19],
                                    titulo: 'Modular 7',
                                    primerPlano: backgrounds[19],
                                },
                                {
                                    selectorImg: selects[20],
                                    titulo: 'Modular 8',
                                    primerPlano: backgrounds[20],
                                },
                                {
                                    selectorImg: selects[21],
                                    titulo: 'Modular 9',
                                    primerPlano: backgrounds[21],
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
}

export default config
