import StyledDownloadElement from './styles'

const DownloadElement = ({ path, imgSrc, title, fileName, fileType, size }) => {
    const downloadFile = () => {
        const anchorElem = document.createElement('a')
        anchorElem.href = path
        anchorElem.download = title + ' ' + fileName + '.' + fileType

        document.body.appendChild(anchorElem)
        anchorElem.click()
        document.body.removeChild(anchorElem)
    }

    return (
        <StyledDownloadElement onClick={downloadFile}>
            <img src={imgSrc} alt='' />
            <span className='title'>{title}</span>
            <span className='file-name'>{fileName}</span>
            <span className='file-info'>
                {fileType} {size}
            </span>
        </StyledDownloadElement>
    )
}

export default DownloadElement
