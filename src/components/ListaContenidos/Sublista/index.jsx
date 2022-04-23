import React from 'react'
import StyledSublista from './styles'
import useOpenSublista from '../../../hooks/useOpenSublista'
import openItemList from '../../../assets/icons/indice/open-item-list.svg'
import closeItemList from '../../../assets/icons/indice/close-item-list.svg'

const Sublista = React.forwardRef(function SublistaRef(
    { title, children, parents },
    ref
) {
    const { isOpen, setIsOpen } = useOpenSublista(ref, parents)

    const toggleSublista = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    return (
        <StyledSublista>
            <div onClick={toggleSublista}>
                <span className='titleText'>{title}</span>
                {isOpen ? (
                    <img
                        src={closeItemList}
                        alt='Cerrar sublista'
                        className='closeItemList'
                    />
                ) : (
                    <img
                        src={openItemList}
                        alt='Abrir sublista'
                        className='openItemList'
                    />
                )}
            </div>
            <ul ref={ref}>{children}</ul>
        </StyledSublista>
    )
})

export default Sublista
