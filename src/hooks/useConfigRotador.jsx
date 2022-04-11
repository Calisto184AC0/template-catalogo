/* eslint-disable react/jsx-key */
import { useState, useReducer, useEffect, Children, useRef } from 'react'
import Indicador from '../components/VisualizadorVariaciones/Indicador'
import Selector from '../components/VisualizadorVariaciones/Selector'

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
    padre,
    seleccionado,
    selectores,
    closeMenu,
    currentRef,
    setRotador,
    indexRotador,
    ...dispatch
}) => {
    let selectoresElem = []
    let hijos = []

    selectoresElem = Children.toArray(
        selectores.map(({ selectorImg, titulo, rotador, menu }, index) => {
            let selectorProps = {
                selectorImg,
                titulo,
            }

            if (menu === undefined) {
                if (seleccionado === index) {
                    // Esto sirve para que las capas ya tengan un preseleccionado
                    rotador[indexRotador]().then(
                        res => (currentRef.current.src = res.default)
                    )
                    setRotador(rotador)
                }

                selectorProps.primerPlano = rotador
                selectorProps.setRotador = setRotador
                selectorProps.indexRotador = indexRotador
                selectorProps.closeMenu = closeMenu
                selectorProps.foregroundImgRef = currentRef
            } else {
                const idMenuHijo = getMenu({
                    indexRotador,
                    padre,
                    setRotador,
                    menu,
                    closeMenu,
                    currentRef,
                    ...dispatch,
                })

                selectorProps.changeMenu = dispatch.changeMenu
                selectorProps.idMenu = idMenuHijo

                hijos.push([index, idMenuHijo])
            }

            return <Selector {...selectorProps} />
        })
    )

    return { selectoresElem, hijos }
}

const getMenu = ({
    padre,
    menu,
    indexRotador,
    setRotador,
    closeMenu,
    currentRef,
    ...dispatch
}) => {
    const idMenu = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)

    const { selectores, seleccionado } = menu

    const seleccionadoAux = seleccionado !== undefined ? seleccionado : -1

    const { selectoresElem, hijos } = getSelectores({
        indexRotador,
        padre: idMenu,
        setRotador,
        seleccionado,
        selectores,
        closeMenu,
        currentRef,
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
    indexRotador,
    config,
    openMenu,
    closeMenu,
    currentRef,
    ...dispatch
}) => {
    const { top, left, menu } = config

    const idMenu = getMenu({
        indexRotador,
        menu,
        closeMenu,
        currentRef,
        ...dispatch,
    })
    const { changeMenu } = dispatch

    const indicadorProps = {
        top,
        left,
        idMenu,
        changeMenu,
        openMenu,
    }

    return <Indicador {...indicadorProps} />
}

const useConfigRotador = (config, isDesplazador) => {
    const [indexRotador, setIndexRotador] = useState(0)
    const [rotador, setRotador] = useState([])
    const currentRef = useRef()

    useEffect(() => {
        if (rotador.length > 0) {
            if (isDesplazador) {
                if (indexRotador === rotador.length) {
                    setIndexRotador(rotador.length - 1)
                } else if (indexRotador < 0) {
                    setIndexRotador(0)
                } else {
                    rotador[indexRotador]().then(
                        res => (currentRef.current.src = res.default)
                    )
                }
            } else {
                if (indexRotador === rotador.length) {
                    setIndexRotador(0)
                } else if (indexRotador < 0) {
                    setIndexRotador(rotador.length - 1)
                } else {
                    rotador[indexRotador]().then(
                        res => (currentRef.current.src = res.default)
                    )
                }
            }
        }
    }, [indexRotador, rotador])

    const [state, dispatch] = useReducer(reducer, {
        indicadores: [],
        actualIdMenu: '',
        actualSeleccionado: -1,
        actualSelectores: [],
        prevSeleccionados: {},
        menus: {},
    })

    const addMenu = menu =>
        dispatch({
            type: ACTIONS.ADD_MENU,
            payload: menu,
        })
    const changeMenu = idMenu =>
        dispatch({
            type: ACTIONS.CHANGE_MENU,
            payload: idMenu,
        })
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
                indexRotador,
                config,
                currentRef,
                setRotador,
                openMenu,
                closeMenu,
                addMenu,
                changeMenu,
                changeSeleccionado,
            })
        )

        return () => {
            cleanState()
            closeMenu()
        }
    }, [])

    return {
        indexRotador,
        setIndexRotador,
        currentRef,
        fondoAlt: '',
        indicadores: state.indicadores,
        seleccionado: state.actualSeleccionado,
        selectores: state.actualSelectores,
        isOpen,
        closeMenu,
        changeSeleccionado,
        idMenu: state.actualIdMenu,
    }
}

export default useConfigRotador
