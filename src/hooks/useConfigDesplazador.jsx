/* eslint-disable react/jsx-key */
import { Children, useEffect, useRef, useState } from 'react'
import Indicador from '../components/VisualizadorDesplazador/Indicador'

const getIndicadores = (indicadorPositions, desplazadores, moreProps) => {
    return Children.toArray(
        indicadorPositions.map(({ top, left }, index) => {
            const indicadorProps = {
                top,
                left,
                desplazador: desplazadores[index],
                ...moreProps,
            }

            return <Indicador {...indicadorProps} />
        })
    )
}

const useConfigDesplazador = config => {
    const [indicadores, setIndicadores] = useState(null)
    const [actualDesplazadorImgs, setActualDesplazadorImgs] = useState([])
    const [actualDesplazadorTitulo, setActualDesplazadorTitulo] = useState('')
    const fondoRef = useRef()

    const cleanDesplazador = () => {
        setActualDesplazadorImgs([])
        setActualDesplazadorTitulo('')
    }

    const defaultIndicadores = getIndicadores(
        config.indicadores,
        config.desplazadores,
        { setActualDesplazadorImgs, setActualDesplazadorTitulo }
    )

    useEffect(() => {
        setIndicadores(defaultIndicadores)
    }, [])

    return {
        actualDesplazadorImgs,
        actualDesplazadorTitulo,
        indicadores,
        fondoRef,
        cleanDesplazador,
    }
}

export default useConfigDesplazador
