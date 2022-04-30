import { useEffect, useRef, useState } from 'react'
import ListaContenidos from '../../components/ListaContenidos'
import { Titulo } from '../../components/Titulos'
import { COLORS } from '../../global/GlobalStyles'
import BtnIndice from './BtnIndice'
import { StyledIndice, Container } from './styles'
import openMenu from '../../assets/icons/indice/open-menu.svg'
import closeMenu from '../../assets/icons/indice/close-menu.svg'
import { slideDown, slideUp } from '../../helpers/animations'

const Indice = () => {
    const indiceRef = useRef()
    const openRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [actualHeight, setActualHeight] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    // aquí no debería aparecer el menú
                    if (
                        window.scrollY <=
                        indiceRef.current.parentNode.offsetTop +
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
                rootMargin: '0px 0px 0px 0px',
                threshold: 0,
            }
        )

        observer.observe(indiceRef.current)
    }, [])

    useEffect(() => {
        if (window.scrollY !== 0) {
            if (isOpen) {
                setActualHeight(indiceRef.current.offsetHeight)
                document.body.style.overflowY = 'hidden'

                indiceRef.current.style.position = 'fixed'
                indiceRef.current.style.top = '0px'
                indiceRef.current.style.left = '0px'
                indiceRef.current.style.zIndex = 3
                indiceRef.current.style.maxHeight = '100vh'
                indiceRef.current.style.overflowY = 'scroll'
                slideDown(indiceRef.current, 1)
            } else {
                document.body.style.overflowY = 'auto'
                indiceRef.current.style.overflowY = 'hidden'

                setActualHeight(indiceRef.current.offsetHeight)

                slideUp(indiceRef.current, 1, () => {
                    indiceRef.current.style.position = ''
                    indiceRef.current.style.top = ''
                    indiceRef.current.style.left = ''
                    indiceRef.current.style.zIndex = ''
                    indiceRef.current.style.maxHeight = 'initial'
                    setActualHeight(0)
                })
            }
        }
    }, [isOpen])

    const handleBtnIndice = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const handleClickAnchor = e => {
        if (!isOpen) return

        if (
            e.target.tagName === 'A' ||
            (e.target.tagName === 'SPAN' && e.target.parentNode.tagName === 'A')
        ) {
            setIsOpen(false)
        }
    }

    return (
        <>
            <Container actualHeight={actualHeight}>
                <StyledIndice
                    backgroundColor={COLORS.gray08}
                    ref={indiceRef}
                    isOpen={isOpen}
                    onClick={handleClickAnchor}
                >
                    <Titulo color={COLORS.gray01}>Índice</Titulo>
                    <ListaContenidos />
                </StyledIndice>
            </Container>
            <BtnIndice
                src={isOpen ? closeMenu : openMenu}
                ref={openRef}
                onClick={handleBtnIndice}
            />
        </>
    )
}

export default Indice
