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
    indicadores: [
        { top: '35%', left: '40%' },
        { top: '48%', left: '54%' },
        { top: '62%', left: '65%' },
    ],
    desplazadores: [
        {
            titulo: 'Flamed',
            imgs: flamedImports,
        },
        {
            titulo: 'Lapado',
            imgs: lapadoImports,
        },
        {
            titulo: 'Mate',
            imgs: mateImports,
        },
    ],
}

export default config
