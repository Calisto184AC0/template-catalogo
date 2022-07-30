import { createContext, useContext, useState } from 'react'

const MultipleOptionsContext = createContext()

const MultipleOptionsProvider = ({ children }) => {
    const [listaCambios, setListaCambios] = useState([])
    const [idsMenu, setIdsMenu] = useState({})

    const addIdsMenu = (idMenu, selectorImg, plano) => {
        setIdsMenu(prev => {
            if (prev[idMenu]) {
                return {
                    ...prev,
                    [idMenu]: {
                        ...prev[idMenu],
                        listaSelector: [
                            ...prev[idMenu].listaSelector,
                            selectorImg,
                        ],
                    },
                }
            }

            const newObj = {
                ...prev,
                [idMenu]: {
                    listaSelector: [selectorImg],
                    plano,
                },
            }

            return newObj
        })
    }

    const pushCambio = cambio => setListaCambios(prev => [...prev, cambio])
    const removeCambio = cambio =>
        setListaCambios(prev => prev.filter(id => id !== cambio))

    const cleanListaCambios = () => setListaCambios([])

    const value = {
        listaCambios,
        pushCambio,
        cleanListaCambios,
        removeCambio,
        addIdsMenu,
        idsMenu,
    }

    return (
        <MultipleOptionsContext.Provider value={value}>
            {children}
        </MultipleOptionsContext.Provider>
    )
}

const useListaCambios = () => useContext(MultipleOptionsContext)

export { useListaCambios }
export default MultipleOptionsProvider
