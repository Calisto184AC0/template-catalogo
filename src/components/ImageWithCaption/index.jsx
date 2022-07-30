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
    isGray = false,
}) => {
    if (!caption && !mostrarCaption)
        return (
            <StyledImageWithCaption
                className={className}
                style={style}
                columnSpan={columnSpan}
            >
                <img
                    src={src}
                    alt={alt}
                    onClick={onClickFunc}
                    className={isGray ? 'gray' : ''}
                />
            </StyledImageWithCaption>
        )

    return (
        <StyledImageWithCaption
            className={className}
            style={style}
            columnSpan={columnSpan}
        >
            <img
                src={src}
                alt={alt}
                onClick={onClickFunc}
                className={isGray ? 'gray' : ''}
            />
            <figcaption>{caption || '-'}</figcaption>
        </StyledImageWithCaption>
    )
}

export default ImageWithCaption
