import { selects } from '../assets/images/Diseno/Formato'

const flamed = import.meta.glob(
        '../assets/images/Diseno/Acabados/RENDER FLAMED/**'
    ),
    lapado = import.meta.glob(
        '../assets/images/Diseno/Acabados/RENDER LAPADO/**'
    ),
    mate = import.meta.glob('../assets/images/Diseno/Acabados/RENDER MATE/**')

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

const flamedImports = Object.values(ordenar(flamed)),
    lapadoImports = Object.values(ordenar(lapado)),
    mateImports = Object.values(ordenar(mate))

const config = {
    top: '90%',
    left: '4%',
    menu: {
        seleccionado: 0,
        selectores: [
            {
                selectorImg: selects[1],
                titulo: 'Flamed',
                rotador: flamedImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Lapado',
                rotador: lapadoImports,
            },
            {
                selectorImg: selects[1],
                titulo: 'Mate',
                rotador: mateImports,
            },
        ],
    },
}

export default config
