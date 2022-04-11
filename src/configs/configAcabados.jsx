import { selects } from '../assets/images/Diseno/Formato'
import getDataFromModules from '../helpers/getDataFromModules'

const flamed = import.meta.globEager(
        '../assets/images/Diseno/Acabados/RENDER FLAMED/**'
    ),
    lapado = import.meta.globEager(
        '../assets/images/Diseno/Acabados/RENDER LAPADO/**'
    ),
    mate = import.meta.globEager(
        '../assets/images/Diseno/Acabados/RENDER MATE/**'
    )

const ordenar = imgs => {
    return imgs.sort((a, b) => {
        const aAux = Number.parseInt(a.match(/(?<=\()[0-9]+(?=\))/g)[0])
        const bAux = Number.parseInt(b.match(/(?<=\()[0-9]+(?=\))/g)[0])

        if (aAux < bAux) return -1
        if (aAux > bAux) return 1
        return 0
    })
}

const flamedImports = ordenar(getDataFromModules(flamed)),
    lapadoImports = ordenar(getDataFromModules(lapado)),
    mateImports = ordenar(getDataFromModules(mate))

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
