const getCookie = value => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === value ? decodeURIComponent(parts[1]) : r
    }, '')
}

export default getCookie
