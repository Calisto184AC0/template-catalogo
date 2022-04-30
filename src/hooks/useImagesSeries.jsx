import { Children } from 'react'
import getDataFromModules from '../helpers/getDataFromModules'

const imagenesAmbienteImports = import.meta.globEager(
    '../assets/images/Series/**/AMBIENTES/[[:digit:]]*.*.*'
)

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports)

const useImagesSeries = () => {
    return Children.toArray(
        imagenesAmbiente.map(src => {
            // eslint-disable-next-line react/jsx-key
            return <img src={src} alt='' />
        })
    )
}

export default useImagesSeries
