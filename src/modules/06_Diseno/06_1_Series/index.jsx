import { useEffect, useRef, useState } from 'react'
import FullScreen from '../../../components/FullScreen'
import configArquitect from '../../../configs/configArquitect'
import config from '../../../configs/configPiedra'
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
                config={config}
                setFullScreenSrc={setFullScreenSrc}
            />
            <Serie
                id={ids[1]}
                config={configArquitect}
                setFullScreenSrc={setFullScreenSrc}
            />
            {/* <Serie id={ids[2]} />
            <Serie id={ids[3]} />
            <Serie id={ids[4]} />
            <Serie id={ids[5]} /> */}
        </>
    )
}

export default Series
