import { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const FONT_SIZE_DEFAULT = '16px'
const FONT_FAMILY = 'Inter'

const DISTANCES = {
    small: '1.563rem',
    medium: '3.125rem',
    long: '6.25rem',
}

const COLORS = {
    gray: '#EBEBEB',
    lightGray: '#F7F7F7',
    darkGray: '#969696',
    black: '#000000',
    white: '#FFFFFF',
}

const TextSmall = css`
    font-size: 1rem;
    line-height: 20px;
`

const TextMedium = css`
    font-size: 1.125rem;
    line-height: 21px;
`

const TextLarge = css`
    font-size: 1.875rem;
    line-height: 36px;
`

const GridLayout = css`
    display: grid;
    column-gap: ${DISTANCES.small};
`

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: ${FONT_SIZE_DEFAULT};
        font-family: ${FONT_FAMILY};
    }

    strong {
        font-weight: bold;
    }
`

export { COLORS, TextSmall, TextMedium, TextLarge, GridLayout }
export default GlobalStyles
