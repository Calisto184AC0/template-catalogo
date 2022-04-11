import { useState } from 'react'
import FullScreen from '../../../components/FullScreen'
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
import Serie from './Serie'

const Series = ({ ids }) => {
    const [fullScreenSrc, setFullScreenSrc] = useState('')

    return (
        <>
            <FullScreen
                imgSrc={fullScreenSrc}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[0]}
                config={configBASALT}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[1]}
                config={configDOLM}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[2]}
                config={configQUARTZ}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[3]}
                config={configMARBLE}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[4]}
                config={configSTONE}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[5]}
                config={configQUARCITY}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[6]}
                config={configCRETE}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[7]}
                config={configPORTLAND}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[8]}
                config={configSPACE}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[9]}
                config={configTZMENT}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[10]}
                config={configWOOD}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[11]}
                config={configTERRAZO}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[12]}
                config={configArquitect}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[13]}
                config={configVOLUMEN}
                setFullScreenSrc={setFullScreenSrc}
            />
        </>
    )
}

export default Series
