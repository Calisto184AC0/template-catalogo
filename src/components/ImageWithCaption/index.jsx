import StyledImageWithCaption from './styles'

const ImageWithCaption = ({ src, alt, caption, onClickFunc }) => {
    return (
        <StyledImageWithCaption>
            <img src={src} alt={alt} onClick={onClickFunc} />
            <figcaption>{caption}</figcaption>
        </StyledImageWithCaption>
    )
}

export default ImageWithCaption
