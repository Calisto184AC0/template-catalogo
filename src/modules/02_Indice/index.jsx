import { useEffect, useRef, useState } from 'react'
import ListaContenidos from '../../components/ListaContenidos'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import BtnIndice from './BtnIndice'
import { StyledIndice } from './styles'
import openMenu from '../../assets/icons/indice/open-menu.svg'
import closeMenu from '../../assets/icons/indice/close-menu.svg'
import flecha from '../../assets/icons/flechita.svg'
import { slideDown, slideUp } from '../../helpers/animations'
import scrollTo from '../../helpers/scrollTo'
import MenuDesplegable from './MenuDesplegable'

const Indice = ({ indiceRef }) => {
    const menuRef = useRef()
    const openRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [menuDesplegable, setMenuDesplegable] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (window.scrollY <= indiceRef.current.offsetTop) return

                if (entries[0].isIntersecting) {
                    // Debería aparecer cuando está por debajo del índice
                    if (
                        window.scrollY <=
                        indiceRef.current.offsetTop +
                            indiceRef.current.offsetHeight
                    ) {
                        openRef.current.style.transform = 'translateY(-10vh)'
                        openRef.current.style.opacity = 0
                        openRef.current.style.visibility = 'hidden'
                    }
                } else {
                    // aquí sí que debería aparecer
                    openRef.current.style.transform = 'translateY(0px)'
                    openRef.current.style.opacity = 1
                    openRef.current.style.visibility = 'visible'
                }
            },
            {
                root: null,
                rootMargin: '0px 0px 10px 0px',
                threshold: 0,
            }
        )

        observer.observe(indiceRef.current)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
            document.body.parentElement.style.scrollBehavior = 'auto'
            setMenuDesplegable(
                <MenuDesplegable menuRef={menuRef} setIsOpen={setIsOpen}>
                    <Titulo color={COLORS.gray01}>Índice</Titulo>
                    <ListaContenidos />
                </MenuDesplegable>
            )
        } else {
            if (menuDesplegable !== null)
                slideUp(menuRef.current, 1, () => {
                    setMenuDesplegable(null)
                    document.body.style.overflowY = ''
                    document.body.parentElement.style.scrollBehavior = 'smooth'
                })
        }
        //     if (window.scrollY !== 0) {
        //         if (isOpen) {
        //             document.body.style.overflowY = 'hidden'
        //             indiceRef.current.style.position = 'fixed'
        //             indiceRef.current.style.top = '0px'
        //             indiceRef.current.style.left = '0px'
        //             indiceRef.current.style.zIndex = 3
        //             indiceRef.current.style.maxHeight = '100vh'
        //             indiceRef.current.style.overflowY = 'scroll'
        //             slideDown(indiceRef.current, 1)
        //         } else {
        //             document.body.style.overflowY = 'auto'
        //             indiceRef.current.style.overflowY = 'hidden'
        //             slideUp(indiceRef.current, 1)
        //         }
        //     }
    }, [isOpen])

    const handleBtnIndice = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const handleClickFlecha = () => {
        const position =
            indiceRef.current.offsetHeight + indiceRef.current.offsetTop
        scrollTo(position, 2000)
    }

    return (
        <>
            <StyledIndice backgroundColor={COLORS.gray08} ref={indiceRef}>
                <Titulo color={COLORS.gray01}>Índice</Titulo>
                <ListaContenidos />
                <img
                    src={flecha}
                    alt=''
                    className='flecha-indice'
                    onClick={handleClickFlecha}
                />
                <div className='idiomas'>
                    <a href='#' className='seleccionado'>
                        ES
                    </a>
                    <a href='/en'>EN</a>
                </div>
            </StyledIndice>
            {menuDesplegable}
            <BtnIndice
                src={isOpen ? closeMenu : openMenu}
                ref={openRef}
                onClick={handleBtnIndice}
            />
        </>
    )
}

export default Indice
