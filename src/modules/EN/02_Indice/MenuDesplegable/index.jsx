import { COLORS } from '../../../../global/GlobalStyles'
import StyledMenuDesplegable from './styles'

const MenuDesplegable = ({ children, menuRef, setIsOpen }) => {
    const handleClickAnchor = e => {
        if (
            e.target.tagName === 'A' ||
            (e.target.tagName === 'SPAN' && e.target.parentNode.tagName === 'A')
        ) {
            setIsOpen(false)
        }
    }

    return (
        <StyledMenuDesplegable
            backgroundColor={COLORS.gray08}
            ref={menuRef}
            onClick={handleClickAnchor}
        >
            {children}
        </StyledMenuDesplegable>
    )
}

export default MenuDesplegable
