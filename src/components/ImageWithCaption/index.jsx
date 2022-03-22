import StyledImageWithCaption from './styles'

const ImageWithCaption = ({ src, alt, caption }) => {
    return (
        <StyledImageWithCaption>
            <img src={src} alt={alt} />
            <figcaption>{caption}</figcaption>
        </StyledImageWithCaption>
    )
}

export default ImageWithCaption
