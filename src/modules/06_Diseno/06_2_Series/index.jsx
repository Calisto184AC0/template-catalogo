import { useState } from 'react'
import Anotacion from '../../../components/Anotacion'
import FullScreen from '../../../components/FullScreen'
import VisualizadorVariaciones from '../../../components/VisualizadorVariaciones'
import configArquitect from '../../../configs/Series/configArquitect'
import configBASALT from '../../../configs/Series/configBasalt'
import configCRETE from '../../../configs/Series/configCrete'
import configDOLM from '../../../configs/Series/configDolm'
import configMARBLE from '../../../configs/Series/configMarble'
import configPORTLAND from '../../../configs/Series/configPortland'
import configQUARCITY from '../../../configs/Series/configQuarcity'
import configQUARTZ from '../../../configs/Series/configQuartz'
import configSPACE from '../../../configs/Series/configSpace'
import configSTONE from '../../../configs/Series/configStone'
import configTERRAZO from '../../../configs/Series/configTerrazo'
import configTZMENT from '../../../configs/Series/configTzment'
import configVOLUMEN from '../../../configs/Series/configVolumen'
import configWOOD from '../../../configs/Series/configWood'
import { COLORS } from '../../../global/GlobalStyles'
import Serie from './Serie'

import fondo from '../../../assets/images/VolumenVariacion/fondo.jpg'
import indicadoresFormato from '../../../configs/configVolumenVariacion'
import { useListaCambios } from '../../../contexts/MultipleOptionsContext'
import Anotaciones from '../../../components/Anotacion/Anotaciones'

import { useRef } from 'react'
import createPDF from '../../../utils/createPDF'

const Series = ({ ids }) => {
    const [fullScreenSrc, setFullScreenSrc] = useState('')
    const [fullScreenTitulo, setFullScreenTitulo] = useState('')
    const visRef = useRef(null)

    const { listaCambios, cleanListaCambios, addIdsMenu, idsMenu } =
        useListaCambios()

    const propsFormato = {
        anotacionPDF: {
            text: 'Haz click aquí para descargar un PDF con tu colocación',
            type: 'pdf',
            onClick: () => createPDF(visRef),
        },
        anotacion2: {
            text: 'Selecciona las áreas donde quieras aplicar la pieza',
            type: 'normal',
        },
        anotacion: {
            text: 'Haz click en el punto para seleccionar la pieza a aplicar',
            type: 'click',
        },
        visualizador: {
            config: indicadoresFormato,
            srcfondo: fondo,
            altFondo: 'Imagen de fondo con indicadores',
            volumen: { listaCambios, cleanListaCambios, addIdsMenu, idsMenu },
            visRef,
        },
    }

    return (
        <>
            <FullScreen
                imgSrc={fullScreenSrc}
                setFullScreenSrc={setFullScreenSrc}
                titulo={fullScreenTitulo}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[0]}
                config={configBASALT}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[1]}
                config={configDOLM}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[2]}
                config={configQUARTZ}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[3]}
                config={configMARBLE}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[4]}
                config={configSTONE}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[5]}
                config={configQUARCITY}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[6]}
                config={configCRETE}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[7]}
                config={configPORTLAND}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[8]}
                config={configSPACE}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[9]}
                config={configTZMENT}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[10]}
                config={configWOOD}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[11]}
                config={configTERRAZO}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[12]}
                config={configArquitect}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            />
            <Serie
                id={ids[13]}
                config={configVOLUMEN}
                setFullScreenSrc={setFullScreenSrc}
                setFullScreenTitulo={setFullScreenTitulo}
                backgroundColor={COLORS.gray01}
            >
                <Anotaciones className='anotacion-variaciones'>
                    <Anotacion {...propsFormato.anotacion2} />
                    <Anotacion {...propsFormato.anotacion} />
                    <Anotacion {...propsFormato.anotacionPDF} />
                </Anotaciones>
                <VisualizadorVariaciones {...propsFormato.visualizador} />
            </Serie>
        </>
    )
}

export default Series
