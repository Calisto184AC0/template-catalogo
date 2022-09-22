/* eslint-disable react/jsx-key */
import { Children } from 'react'
import getDataFromModules from '../helpers/getDataFromModules'
import Enlace from '../modules/06_Diseno/06_1_IndiceSeries/Enlace'

const imagenesAmbienteImports = import.meta.globEager(
    '../assets/images/Series/**/EJEMPLO/**'
)

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports)

const enlacesObj = [
    { titulo: 'DO&BASALT', src: imagenesAmbiente[1], id: '#basalt' },
    { titulo: 'DO&DOLM', src: imagenesAmbiente[3], id: '#dolm' },
    { titulo: 'DO&DQUARTZ', src: imagenesAmbiente[7], id: '#dquartz' },
    { titulo: 'DO&MARBLE', src: imagenesAmbiente[4], id: '#marble' },
    { titulo: 'DO&STONE', src: imagenesAmbiente[9], id: '#stone' },
    { titulo: 'DO&QUARCITY', src: imagenesAmbiente[6], id: '#quarcity' },
    { titulo: 'DO&CRETE', src: imagenesAmbiente[2], id: '#crete' },
    { titulo: 'DO&PORTLAND', src: imagenesAmbiente[5], id: '#portland' },
    { titulo: 'DO&SPACE', src: imagenesAmbiente[8], id: '#space' },
    { titulo: 'DO&TZMENT', src: imagenesAmbiente[11], id: '#tzment' },
    { titulo: 'DO&WOOD', src: imagenesAmbiente[13], id: '#wood' },
    { titulo: 'DO&TERRAZO', src: imagenesAmbiente[10], id: '#terrazo' },
    { titulo: 'DO&ARQUITECT', src: imagenesAmbiente[0], id: '#arquitect' },
    { titulo: 'DO&VOLUMEN', src: imagenesAmbiente[12], id: '#volumen' },
]

const useImagesSeries = () => {
    return Children.toArray(
        enlacesObj.map(({ titulo, src, id }) => {
            return (
                <Enlace href={id} className='enlace'>
                    <img src={src} alt={titulo + ' ejemplo'} />
                    <span>{titulo}</span>
                </Enlace>
            )
        })
    )
}

export default useImagesSeries
