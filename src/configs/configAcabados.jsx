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

const flamedImports = getDataFromModules(flamed),
    lapadoImports = getDataFromModules(lapado),
    mateImports = getDataFromModules(mate)

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
