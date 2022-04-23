const animationDuration = 1.4

const showLogoDelay = 1,
    showLogoDuration = 1.6,
    logoDelayBetween = 1,
    fadeLogoDelay = showLogoDelay + showLogoDuration + logoDelayBetween,
    fadeLogoDuration = animationDuration,
    showCitaDelay = fadeLogoDelay,
    showCitaDuration = animationDuration

const totalDuration = showCitaDelay + showCitaDuration

export {
    showLogoDelay,
    showLogoDuration,
    logoDelayBetween,
    fadeLogoDelay,
    fadeLogoDuration,
    showCitaDelay,
    showCitaDuration,
    totalDuration,
}
