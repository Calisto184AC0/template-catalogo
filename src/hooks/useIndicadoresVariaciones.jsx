/* eslint-disable react/jsx-key */
import { Children, useEffect, useReducer, useRef, useState } from 'react'
import Indicador from '../components/VisualizadorVariaciones/Indicador'
import Selector from '../components/VisualizadorVariaciones/Selector'

const getCapas = config => {
    let capasRef = []
    let capasElem = []

    Object.entries(config).map(([grupo]) => {
        const ref = useRef()

        capasRef.push(ref)
        capasElem.push(
            <img
                src=''
                alt={'Capa de ' + grupo}
                ref={ref}
                className='img-foreground'
            />
        )
    })

    return {
        capasRef,
        capas: Children.toArray(capasElem),
    }
}

const ACTIONS = {
    ADD_MENU: 'addmenu',
    CHANGE_MENU: 'changemenu',
    CHANGE_SELECCIONADO: 'changeseleccionado',
    ADD_INDICADORES: 'addselectores',
    CLEAN_STATE: 'clean',
    CLEAN_PREV_SELECCIONADOS: 'cleanpreseleccionado',
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_MENU: {
            const newMenu = {
                ...state,
                menus: {
                    ...state.menus,
                    ...payload,
                },
            }

            return newMenu
        }

        case ACTIONS.CHANGE_MENU: {
            const newMenu = {
                ...state,
                actualSeleccionado: state.menus[payload].seleccionado,
                actualSelectores: state.menus[payload].selectores,
                actualIdMenu: payload,
            }

            return newMenu
        }

        case ACTIONS.CHANGE_SELECCIONADO: {
            let newMenu = { ...state }

            if (newMenu.menus[payload.idMenu].hijos === undefined) {
                // cambiar los preselecciones a los menus correspondientes del objeto newMenu.prevSeleccionado

                if (Object.keys(newMenu.prevSeleccionados).length > 0) {
                    Object.entries(newMenu.prevSeleccionados).map(
                        ([idMenu, { seleccionado }]) => {
                            newMenu.menus[idMenu].seleccionado = seleccionado
                            newMenu.menus[idMenu].hijos.map(
                                ([, idMenuHijo]) => {
                                    newMenu.menus[idMenuHijo].seleccionado = -1
                                }
                            )
                        }
                    )
                }

                newMenu.menus[payload.idMenu].seleccionado = payload.index
            } else {
                let find = true

                newMenu.menus[payload.idMenu].hijos.map(([index]) => {
                    find &= index !== payload.index
                })

                if (find) {
                    // significa que el hijo seleccionado no tiene submenú
                    newMenu.menus[payload.idMenu].seleccionado = payload.index
                    newMenu.menus[payload.idMenu].hijos.map(
                        ([, idMenuHijo]) => {
                            newMenu.menus[idMenuHijo].seleccionado = -1
                        }
                    )
                }

                newMenu.prevSeleccionados[payload.idMenu] = {
                    seleccionado: payload.index,
                }
            }

            return newMenu
        }

        case ACTIONS.ADD_INDICADORES:
            return {
                ...state,
                indicadores: payload,
            }
        case ACTIONS.CLEAN_STATE:
            return {
                indicadores: [],
                actualIdMenu: '',
                actualSeleccionado: -1,
                actualSelectores: [],
                prevSeleccionados: {},
                menus: {},
            }
        case ACTIONS.CLEAN_PREV_SELECCIONADOS:
            return {
                ...state,
                prevSeleccionados: {},
            }
        default:
            return state
    }
}

const getSelectores = ({
    volumen,
    padre,
    seleccionado,
    selectores,
    closeMenu,
    currentRef,
    setActualTitulo,
    setAnotherElement,
    setSelectedColor,
    ...dispatch
}) => {
    let selectoresElem = []
    let hijos = []

    selectoresElem = Children.toArray(
        selectores.map(
            (
                {
                    selectorImg,
                    titulo,
                    primerPlano,
                    menu,
                    quitarFondo = false,
                    colorPicker,
                },
                index
            ) => {
                let selectorProps = {
                    selectorImg,
                    titulo,
                    setActualTitulo,
                    quitarFondo,
                    colorPicker,
                    setAnotherElement,
                    setSelectedColor,
                }

                if (menu === undefined) {
                    if (seleccionado === index) {
                        // Esto sirve para que las capas ya tengan un preseleccionado
                        currentRef.current.src = primerPlano
                        setActualTitulo(titulo)
                    }

                    if (primerPlano === undefined) {
                        selectorProps.noClick = true
                    } else {
                        if (volumen) {
                            volumen.addIdsMenu(padre, primerPlano, currentRef)
                        }

                        selectorProps.primerPlano = primerPlano
                        selectorProps.closeMenu = closeMenu
                        selectorProps.foregroundImgRef = currentRef
                    }
                } else {
                    const idMenuHijo = getMenu({
                        padre,
                        menu,
                        closeMenu,
                        currentRef,
                        setActualTitulo,
                        setAnotherElement,
                        setSelectedColor,
                        ...dispatch,
                    })

                    selectorProps.changeMenu = dispatch.changeMenu
                    selectorProps.idMenu = idMenuHijo

                    hijos.push([index, idMenuHijo])
                }

                return <Selector {...selectorProps} />
            }
        )
    )

    return { selectoresElem, hijos }
}

const getMenu = ({
    volumen,
    padre,
    menu,
    closeMenu,
    currentRef,
    setActualTitulo,
    setAnotherElement,
    setSelectedColor,
    ...dispatch
}) => {
    const idMenu = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)

    const { selectores, seleccionado } = menu

    const seleccionadoAux = seleccionado !== undefined ? seleccionado : -1

    const { selectoresElem, hijos } = getSelectores({
        volumen,
        padre: idMenu,
        seleccionado,
        selectores,
        closeMenu,
        currentRef,
        setActualTitulo,
        setAnotherElement,
        setSelectedColor,
        ...dispatch,
    })

    let auxMenu = {}
    auxMenu[idMenu] = {
        seleccionado: seleccionadoAux,
        selectores: selectoresElem,
    }

    if (hijos.length > 0) {
        auxMenu[idMenu].hijos = hijos
    }

    if (padre !== undefined) {
        auxMenu[idMenu].padre = padre
    }

    dispatch.addMenu(auxMenu)

    return idMenu
}

const getIndicadores = ({
    volumen,
    config,
    capasRef,
    openMenu,
    closeMenu,
    setActualTitulo,
    setAnotherElement,
    setSelectedColor,
    ...dispatch
}) => {
    return Children.toArray(
        // TODO: Falta conseguir que cada funcione con un grupo de indicadores
        Object.entries(config).map(([grupo, indicadores], index) => {
            const currentRef = capasRef[index]

            const indicadoresGrupo = indicadores.map(
                ({ top, left, coord, menu }) => {
                    const idMenu = getMenu({
                        volumen,
                        menu,
                        closeMenu,
                        currentRef,
                        setActualTitulo,
                        setAnotherElement,
                        setSelectedColor,
                        ...dispatch,
                    })
                    const { changeMenu } = dispatch

                    const indicadorProps = {
                        coord,
                        top,
                        left,
                        idMenu,
                        changeMenu,
                        openMenu,
                        closeMenu,
                    }

                    return <Indicador {...indicadorProps} />
                }
            )

            return indicadoresGrupo
        })
    )
}

const useIndicadoresVariaciones = (config, volumen) => {
    const { capas, capasRef } = getCapas(config)

    const [state, dispatch] = useReducer(reducer, {
        indicadores: [],
        actualIdMenu: '',
        actualSeleccionado: -1,
        actualSelectores: [],
        prevSeleccionados: {},
        menus: {},
    })

    const [actualTitulo, setActualTitulo] = useState('')

    const [anotherElement, setAnotherElement] = useState()
    const [selectedColor, setSelectedColor] = useState('#3c0000')

    const addMenu = menu =>
        dispatch({
            type: ACTIONS.ADD_MENU,
            payload: menu,
        })
    const changeMenu = idMenu => {
        dispatch({
            type: ACTIONS.CHANGE_MENU,
            payload: idMenu,
        })
    }
    const changeSeleccionado = (index, idMenu) =>
        dispatch({
            type: ACTIONS.CHANGE_SELECCIONADO,
            payload: { index, idMenu },
        })
    const addIndicadores = indicadores =>
        dispatch({
            type: ACTIONS.ADD_INDICADORES,
            payload: indicadores,
        })
    const cleanState = () => dispatch({ type: ACTIONS.CLEAN_STATE })
    const cleanPrevSeleccionados = () =>
        dispatch({ type: ACTIONS.CLEAN_PREV_SELECCIONADOS })

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
        // Es porque cuando se abre otro indicador, es decir, otro elemento se debe limpiar los preseleccionados
        cleanPrevSeleccionados()
    }
    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        addIndicadores(
            getIndicadores({
                volumen,
                config,
                capasRef,
                setActualTitulo,
                openMenu,
                closeMenu,
                addMenu,
                changeMenu,
                changeSeleccionado,
                setAnotherElement,
                setSelectedColor,
            })
        )

        return () => {
            cleanState()
            closeMenu()
        }
    }, [])

    return {
        actualTitulo,
        capas,
        indicadores: state.indicadores,
        seleccionado: state.actualSeleccionado,
        selectores: state.actualSelectores,
        isOpen,
        closeMenu,
        changeSeleccionado,
        idMenu: state.actualIdMenu,
        changeMenu,
        openMenu,
        anotherElement,
        setAnotherElement,
        selectedColor,
    }
}

export default useIndicadoresVariaciones
