import { selects } from '../assets/images/Diseno/Formato'

let albardilla = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/ALBARDILLA/*.jpg'
    ),
    peldano1 = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/PELDANO 1/*.jpg'
    ),
    peldano2 = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/PELDANO 2/*.jpg'
    ),
    peldano3 = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/PELDANO 3/*.jpg'
    ),
    rejilla = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/REJILLA/*.jpg'
    ),
    sueloElevado = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/SUELO ELEVADO/*.jpg'
    ),
    techo = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/TECHO/*.jpg'
    ),
    vierteaguas = import.meta.glob(
        '../assets/images/Diseno/Piezas especiales/VIERTEAGUAS/*.jpg'
    )

const ordenar = imgs => {
    return Object.fromEntries(
        Object.entries(imgs).sort(([a], [b]) => {
            const aAux = Number.parseInt(a.match(/(?<=\()[0-9]+(?=\))/g)[0])
            const bAux = Number.parseInt(b.match(/(?<=\()[0-9]+(?=\))/g)[0])

            if (aAux < bAux) return -1
            if (aAux > bAux) return 1
            return 0
        })
    )
}

const albardillaImports = Object.values(ordenar(albardilla)),
    peldano1Imports = Object.values(ordenar(peldano1)),
    peldano2Imports = Object.values(ordenar(peldano2)),
    peldano3Imports = Object.values(ordenar(peldano3)),
    rejillaImports = Object.values(ordenar(rejilla)),
    sueloElevadoImports = Object.values(ordenar(sueloElevado)),
    techoImports = Object.values(ordenar(techo)),
    vierteaguasImports = Object.values(ordenar(vierteaguas))

const config = {
    top: '90%',
    left: '4%',
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selects[1],
                titulo: 'Albardilla',
                rotador: albardillaImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Peldaño',
                menu: {
                    selectores: [
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 1',
                            rotador: peldano1Imports,
                        },
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 2',
                            rotador: peldano2Imports,
                        },
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 3',
                            rotador: peldano3Imports,
                        },
                    ],
                },
            },
            {
                selectorImg: selects[1],
                titulo: 'Peldaño',
                menu: {
                    selectores: [
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 1',
                            rotador: peldano1Imports,
                        },
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 2',
                            rotador: peldano2Imports,
                        },
                        {
                            selectorImg: selects[1],
                            titulo: 'Tipo 3',
                            rotador: peldano3Imports,
                        },
                    ],
                },
            },
            {
                selectorImg: selects[1],
                titulo: 'Rejilla',
                rotador: rejillaImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Suelo elevado',
                rotador: sueloElevadoImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Techo',
                rotador: techoImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Vierteaguas',
                rotador: vierteaguasImports,
            },
        ],
    },
}

export default config
