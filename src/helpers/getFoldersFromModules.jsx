const getFoldersFromModules = modulesImport => {
    let res = {}

    Object.values(modulesImport).map(mod => {
        const src = mod.default
        const folders = src.split('/')
        const parentFolder = folders[folders.length - 2]

        if (!Array.isArray(res[parentFolder])) {
            res[parentFolder] = []
        }

        res[parentFolder].push(src)
    })

    return res
}

export default getFoldersFromModules
