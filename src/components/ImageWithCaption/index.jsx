import StyledImageWithCaption from './styles'

const ImageWithCaption = ({
    src,
    alt,
    caption,
    onClickFunc,
    className,
    style,
}) => {
    return (
        <StyledImageWithCaption className={className} style={style}>
            <img src={src} alt={alt} onClick={onClickFunc} />
            <figcaption>{caption}</figcaption>
        </StyledImageWithCaption>
    )
}

export default ImageWithCaption
