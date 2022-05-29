import StyledImageWithCaption from './styles'

const ImageWithCaption = ({
    src,
    alt,
    caption,
    onClickFunc,
    className,
    columnSpan,
    style,
    mostrarCaption,
}) => {
    if (!caption && !mostrarCaption)
        return (
            <StyledImageWithCaption
                className={className}
                style={style}
                columnSpan={columnSpan}
            >
                <img src={src} alt={alt} onClick={onClickFunc} />
            </StyledImageWithCaption>
        )

    return (
        <StyledImageWithCaption
            className={className}
            style={style}
            columnSpan={columnSpan}
        >
            <img src={src} alt={alt} onClick={onClickFunc} />
            <figcaption>{caption || '-'}</figcaption>
        </StyledImageWithCaption>
    )
}

export default ImageWithCaption
