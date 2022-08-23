import { useEffect, useRef, useState } from 'react'
import { Titulo } from '../components/Titulos'
import { COLORS } from '../global/GlobalStyles'
import { slideUp } from '../helpers/animations'
import BtnIndice from '../modules/02_Indice/BtnIndice'
import MenuDesplegable from '../modules/02_Indice/MenuDesplegable'
import openMenu from '../assets/icons/indice/open-menu.svg'
import closeMenu from '../assets/icons/indice/close-menu.svg'

const useMenuDesplegableEn = (Lista, titulo, indiceRef) => {
    const menuRef = useRef()
    const openRef = useRef()

    const [isOpen, setIsOpen] = useState(false)
    const [menuDesplegable, setMenuDesplegable] = useState(null)

    useEffect(() => {
        if (indiceRef) {
            const observer = new IntersectionObserver(
                entries => {
                    if (window.scrollY < indiceRef.current.offsetTop) return

                    if (entries[0].isIntersecting) {
                        // Debería aparecer cuando está por debajo del índice
                        if (
                            window.scrollY <=
                            indiceRef.current.offsetTop +
                                indiceRef.current.offsetHeight
                        ) {
                            openRef.current.style.transform =
                                'translateY(-10vh)'
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
        } else {
            openRef.current.style.transform = 'translateY(0px)'
            openRef.current.style.opacity = 1
            openRef.current.style.visibility = 'visible'

            document.cookie = ''
            window.scrollTo(0, 0)

            document.body.style.overflowY = ''
            document.body.parentElement.style.scrollBehavior = 'smooth'
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
            document.body.parentElement.style.scrollBehavior = 'auto'
            setMenuDesplegable(
                <MenuDesplegable menuRef={menuRef} setIsOpen={setIsOpen}>
                    <Titulo color={COLORS.gray01}>{titulo}</Titulo>
                    <Lista isMenuDesplegable={true} en={true} />
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
    }, [isOpen])

    const handleBtnIndice = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const btnIndice = (
        <BtnIndice
            src={isOpen ? closeMenu : openMenu}
            ref={openRef}
            onClick={handleBtnIndice}
        />
    )

    return {
        btnIndice,
        menuDesplegable,
    }
}

export default useMenuDesplegableEn
