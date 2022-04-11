const getDataFromModules = imports => {
    const res = Object.values(imports).map(mod => mod.default)

    return res
}

export default getDataFromModules
