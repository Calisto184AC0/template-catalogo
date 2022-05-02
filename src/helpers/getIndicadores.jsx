/* eslint-disable react/jsx-key */
import { Children } from 'react'
import Indicador from '../components/VisualizadorDesplazador/Indicador'

const getIndicadores = (indicadorPositions, moreProps) => {
    return Children.toArray(
        indicadorPositions.map(({ top, left }) => {
            const indicadorProps = {
                top,
                left,
                ...moreProps,
            }

            return <Indicador {...indicadorProps} />
        })
    )
}

export default getIndicadores
