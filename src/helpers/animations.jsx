/**
 *
 * @param {HTMLElement} element
 */
const slideDown = (element, seconds, callback) => {
    element.animate(
        [{ transform: 'translateY(-100%)' }, { transform: 'translateY(0%)' }],
        {
            easing: 'ease-in-out',
            duration: seconds * 1000,
        }
    )

    if (callback) {
        return setTimeout(callback, seconds * 1000)
    }
}

const slideUp = (element, seconds, callback) => {
    element.animate(
        [{ transform: 'translateY(0%)' }, { transform: 'translateY(-100%)' }],
        {
            easing: 'ease-in-out',
            duration: seconds * 1000,
        }
    )

    if (callback) {
        return setTimeout(callback, seconds * 1000)
    }
}

export { slideDown, slideUp }
