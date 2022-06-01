import { animateScroll } from 'react-scroll'

const scrollTo = (position, duration, callback) => {
    document.documentElement.style.scrollBehavior = 'auto'
    animateScroll.scrollTo(position, {
        duration,
        smooth: true,
    })
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
        if (callback) callback()
    }, duration)
}

const simpleHorizontalScroll = (position, duration, containerId) => {
    animateScroll.scrollTo(position, {
        containerId,
        duration,
        smooth: true,
        horizontal: true,
    })
}

export { simpleHorizontalScroll }

export default scrollTo
