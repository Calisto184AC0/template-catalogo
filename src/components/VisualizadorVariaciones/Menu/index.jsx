import { useEffect, useRef, useState } from 'react'
import StyledMenu from './styles'
import izq from '../../../assets/icons/desplIzq.svg'
import der from '../../../assets/icons/desplDer.svg'
import { css } from 'styled-components'
import StyledSelector from '../Selector/styles'

const Menu = ({
    isOpen,
    seleccionado,
    selectores,
    idMenu,
    changeSeleccionado,
    volumen,
}) => {
    const [isOverflow, setIsOverflow] = useState(false)
    const menuContainerRef = useRef()

    useEffect(() => {
        if (
            menuContainerRef.current.scrollWidth >
            menuContainerRef.current.clientWidth
        ) {
            setIsOverflow(true)
        } else {
            setIsOverflow(false)
        }
    }, [selectores, menuContainerRef, isOverflow])

    const menuStyles = css`
        opacity: ${isOpen ? '1' : '0'};
        visibility: ${isOpen ? 'visible' : 'hidden'};

        ${StyledSelector}:nth-child(${seleccionado + 1}) {
            span {
                font-weight: bold;
            }
        }
    `

    const handleClick = ({ target }) => {
        const children = menuContainerRef.current.children

        let checker = target.tagName !== 'DIV' ? target.parentNode : target

        for (let i = 0; i < children.length; i++) {
            if (checker === children[i]) {
                if (volumen) {
                    for (const cambio of volumen.listaCambios) {
                        volumen.idsMenu[cambio].plano.current.src =
                            volumen.idsMenu[cambio].listaSelector[i]
                    }
                    volumen.cleanListaCambios()
                    break
                } else changeSeleccionado(i, idMenu)
            }
        }
    }

    return (
        <StyledMenu moreStyles={menuStyles}>
            {isOverflow ? (
                <img
                    src={izq}
                    alt='Desplazar izquierda'
                    onClick={() => {
                        menuContainerRef.current.scrollBy({
                            left: -menuContainerRef.current.offsetWidth,
                        })
                    }}
                />
            ) : (
                <img
                    src={izq}
                    alt='Desplazar izquierda'
                    style={{ opacity: 0, cursor: 'auto' }}
                />
            )}
            <div
                className='menu-container'
                ref={menuContainerRef}
                onClick={handleClick}
            >
                {selectores}
            </div>
            {isOverflow ? (
                <img
                    src={der}
                    alt='Desplazar derecha'
                    onClick={() => {
                        menuContainerRef.current.scrollBy({
                            left: menuContainerRef.current.offsetWidth,
                        })
                    }}
                />
            ) : (
                <img
                    src={der}
                    alt='Desplazar derecha'
                    style={{ opacity: 0, cursor: 'auto' }}
                />
            )}
        </StyledMenu>
    )
}

export default Menu
