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

export default scrollTo
