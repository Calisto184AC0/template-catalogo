import React from 'react'
import StyledSublista from './styles'
import useOpenSublista from '../../../../hooks/useOpenSublista'
import styled from 'styled-components'
import { COLORS } from '../../../../global/GlobalStyles'

const OpenSublista = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: ${props => props.backgroundColor || ''};
`

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
            <span onClick={toggleSublista}>
                {title}
                {isOpen ? (
                    <OpenSublista backgroundColor={COLORS.gray01} />
                ) : (
                    <OpenSublista backgroundColor={COLORS.gray06} />
                )}
            </span>
            <ul ref={ref}>{children}</ul>
        </StyledSublista>
    )
})

export default Sublista
