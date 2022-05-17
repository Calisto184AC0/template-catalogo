import { Children } from 'react'
import DownloadElement from '../components/DownloadElement'

const useDescargas = config => {
    const descargas = config.map(elem =>
        Children.toArray(<DownloadElement {...elem} />)
    )

    return descargas
}

export default useDescargas
