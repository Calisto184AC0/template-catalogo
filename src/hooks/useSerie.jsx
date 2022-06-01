/* eslint-disable react/jsx-key */
import { Children, useState } from 'react'
import ImageWithCaption from '../components/ImageWithCaption'
import Indicador from '../components/Indicador'

const useSerie = (config, setFullScreenSrc, setFullScreenTitulo) => {
    const [imagenPrincipal, setImagenPrincipal] = useState(
        config.indicadores[0].ambiente.imagen
    )
    const [tituloPrinipal, setTituloPrincipal] = useState(
        config.indicadores[0].ambiente.titulo
    )

    const indicadores = Children.toArray(
        config.indicadores.map(({ top, left, ambiente }) => {
            if (top === undefined) return

            const indicadorProps = {
                top,
                left,
                onClick: () => {
                    setImagenPrincipal(ambiente.imagen)
                    setTituloPrincipal(ambiente.titulo)
                },
            }

            return <Indicador {...indicadorProps} />
        })
    )

    const imgAmbiente = (
        <ImageWithCaption
            src={imagenPrincipal}
            caption={tituloPrinipal}
            mostrarCaption
        />
    )

    const imgSelectorAmbiente = (
        <img className='seleccionar-ambiente' src={config.imgSeleccionar} />
    )

    const imgsMuestra = Children.toArray(
        config.muestras.map(({ titulo, imagen, acabados }) => {
            if (acabados) {
                const configSlider = () => {
                    setFullScreenSrc(acabados)
                    setFullScreenTitulo(config.titulo + ' - ' + titulo)
                }

                return (
                    <ImageWithCaption
                        src={imagen}
                        caption={titulo}
                        onClickFunc={configSlider}
                    />
                )
            }

            return (
                <ImageWithCaption
                    src={imagen}
                    caption={titulo}
                    onClickFunc={() => {
                        setFullScreenSrc(imagen)
                        setFullScreenTitulo(config.titulo + ' - ' + titulo)
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
        imgsMuestra,
        imgsAcabados,
        indicadores,
        imgAmbiente,
        imgSelectorAmbiente,
    }
}

export default useSerie
