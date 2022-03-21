import { useEffect, useState } from 'react'

const useOpenSublista = (ref, parents) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            let totalHeight = 0
            ref.current.childNodes.forEach(child => {
                totalHeight += child.offsetHeight
            })

            parents.map(parentRef => {
                const prevHeight = Number(
                    parentRef.current.style.maxHeight.replace('px', '')
                )
                const newHeight = prevHeight + totalHeight
                parentRef.current.style.maxHeight = newHeight + 'px'
            })

            ref.current.style.maxHeight = totalHeight + 'px'
        } else {
            parents.map(parentRef => {
                const prevHeight = Number(
                    parentRef.current.style.maxHeight.replace('px', '')
                )
                const actualHeight = Number(
                    ref.current.style.maxHeight.replace('px', '')
                )
                const newHeight = prevHeight - actualHeight
                parentRef.current.style.maxHeight = newHeight + 'px'
            })

            ref.current.style.maxHeight = '0px'
        }
    }, [isOpen])

    return {
        isOpen,
        setIsOpen,
    }
}

export default useOpenSublista
