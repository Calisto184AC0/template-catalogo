import getDataFromModules from '../helpers/getDataFromModules'

const selectoresImports = import.meta.globEager('../assets/icons/piezas/**')
const selectores = getDataFromModules(selectoresImports)

const albardilla = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/ALBARDILLA/*.jpg'
    ),
    peldano1 = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/PELDANO 1/*.jpg'
    ),
    peldano2 = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/PELDANO 2/*.jpg'
    ),
    peldano3 = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/PELDANO 3/*.jpg'
    ),
    rejilla = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/REJILLA/*.jpg'
    ),
    sueloElevado = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/SUELO ELEVADO/*.jpg'
    ),
    techo = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/TECHO/*.jpg'
    ),
    vierteaguas = import.meta.globEager(
        '../assets/images/Diseno/Piezas especiales/VIERTEAGUAS/*.jpg'
    )

const albardillaImports = getDataFromModules(albardilla),
    peldano1Imports = getDataFromModules(peldano1),
    peldano2Imports = getDataFromModules(peldano2),
    peldano3Imports = getDataFromModules(peldano3),
    rejillaImports = getDataFromModules(rejilla),
    sueloElevadoImports = getDataFromModules(sueloElevado),
    techoImports = getDataFromModules(techo),
    vierteaguasImports = getDataFromModules(vierteaguas)

const config = {
    top: '90%',
    left: '4%',
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selectores[0],
                titulo: 'Albardilla',
                rotador: albardillaImports,
            },
            {
                selectorImg: selectores[1],
                titulo: 'Peldaños',
                menu: {
                    selectores: [
                        {
                            selectorImg: selectores[1],
                            titulo: 'Tipo 1',
                            rotador: peldano1Imports,
                        },
                        {
                            selectorImg: selectores[2],
                            titulo: 'Tipo 2',
                            rotador: peldano2Imports,
                        },
                        {
                            selectorImg: selectores[3],
                            titulo: 'Tipo 3',
                            rotador: peldano3Imports,
                        },
                    ],
                },
            },
            {
                selectorImg: selectores[4],
                titulo: 'Rejilla',
                rotador: rejillaImports,
            },
            {
                selectorImg: selectores[5],
                titulo: 'Suelo elevado',
                rotador: sueloElevadoImports,
            },
            {
                selectorImg: selectores[6],
                titulo: 'Techo',
                rotador: techoImports,
            },
            {
                selectorImg: selectores[7],
                titulo: 'Vierteaguas',
                rotador: vierteaguasImports,
            },
        ],
    },
}

export default config
