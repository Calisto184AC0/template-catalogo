import { useRef, useState } from 'react'
import Anotacion from '../../../../components/Anotacion'
import FullScreen from '../../../../components/FullScreen'
import VisualizadorVariaciones from '../../../../components/VisualizadorVariaciones'
import configArquitect from '../../../../configs/EN/Series/configArquitect'
import configBASALT from '../../../../configs/EN/Series/configBasalt'
import configCRETE from '../../../../configs/EN/Series/configCrete'
import configDOLM from '../../../../configs/EN/Series/configDolm'
import configMARBLE from '../../../../configs/EN/Series/configMarble'
import configPORTLAND from '../../../../configs/EN/Series/configPortland'
import configQUARCITY from '../../../../configs/EN/Series/configQuarcity'
import configQUARTZ from '../../../../configs/EN/Series/configQuartz'
import configSPACE from '../../../../configs/EN/Series/configSpace'
import configSTONE from '../../../../configs/EN/Series/configStone'
import configTERRAZO from '../../../../configs/EN/Series/configTerrazo'
import configTZMENT from '../../../../configs/EN/Series/configTzment'
import configVOLUMEN from '../../../../configs/EN/Series/configVolumen'
import configWOOD from '../../../../configs/EN/Series/configWood'
import { COLORS } from '../../../../global/GlobalStyles'
import Serie from './Serie'

import fondo from '../../../../assets/images/VolumenVariacion/fondo.jpg'
import configVolumenSelectores from '../../../../configs/EN/configVolumenVariacion'
import { useListaCambios } from '../../../../contexts/MultipleOptionsContext'
import Anotaciones from '../../../../components/Anotacion/Anotaciones'
import createPDF from '../../../../utils/createPDF'

const Series = ({ ids }) => {
    const [fullScreenSrc, setFullScreenSrc] = useState('')
    const [fullScreenTitulo, setFullScreenTitulo] = useState('')
    const visRef = useRef(null)

    const { listaCambios, cleanListaCambios, addIdsMenu, idsMenu } =
        useListaCambios()
    const propsFormato = {
        anotacionPDF: {
            text: 'Click here to download a PDF of your placement',
            type: 'pdf',
            onClick: () => createPDF(visRef),
        },
        anotacion2: {
            text: 'Select the areas where you want to apply the part',
            type: 'normal',
        },
        anotacion: {
            text: 'Click on the point to select the part to be applied.',
            type: 'click',
        },
        visualizador: {
            config: configVolumenSelectores,
            srcfondo: fondo,
            altFondo: 'Background image with indicators',
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
