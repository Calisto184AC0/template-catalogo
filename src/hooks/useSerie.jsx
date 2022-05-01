/* eslint-disable react/jsx-key */
import { Children } from 'react'
import ImageWithCaption from '../components/ImageWithCaption'

const useSerie = (config, setFullScreenSrc, setFullScreenTitulo) => {
    const imgsEjemplo = Children.toArray(
        config.ejemplos.map(({ titulo, imagen }) => {
            return <ImageWithCaption src={imagen} caption={titulo} />
        })
    )

    const imgsMuestra = Children.toArray(
        config.muestras.map(({ titulo, imagen }) => {
            return (
                <ImageWithCaption
                    src={imagen}
                    caption={titulo}
                    onClickFunc={() => {
                        setFullScreenSrc(imagen)
                        setFullScreenTitulo(titulo)
                    }}
                />
            )
        })
    )

    let imgsAcabados

    if (config.acabados) {
        imgsAcabados = Children.toArray(
            config.acabados.map(({ titulo, imagen }) => {
                return <ImageWithCaption src={imagen} caption={titulo} />
            })
        )
    }

    return {
        titulo: config.titulo,
        descripcion: config.descripcion,
        imgsEjemplo,
        imgsMuestra,
        imgsAcabados,
    }
}

export default useSerie
