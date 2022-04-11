import { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const FONT_SIZE_DEFAULT = '16px'
const FONT_FAMILY = 'Poppins'

const DISTANCES = {
    small: '1.563rem',
    medium: '3.125rem',
    long: '6.25rem',
}

const COLORS = {
    gray01: '#F2F2F2',
    gray02: '#D9D9D9',
    gray03: '#BFBFBF',
    gray04: '#A6A6A6',
    gray05: '#8C8C8C',
    gray06: '#595959',
    gray07: '#262626',
    gray08: '#0D0D0D',
}

const GRID = {
    numColumns: 12,
    columnGap: DISTANCES.small,
    rowGap: DISTANCES.long,
    horizontalSpace: DISTANCES.medium,
    verticalSpace: DISTANCES.long,
}

const Text = css`
    color: ${props => props.color || ''};
`

const TextSmall = css`
    ${Text}
    font-size: 1rem;
    line-height: 25px;
`

const TextMedium = css`
    ${Text}
    font-size: 1.188rem;
    line-height: 29px;
`

const TextLarge = css`
    ${Text}
    font-size: 1.875rem;
    line-height: 40px;
`

const TextExtraLarge = css`
    ${Text}
    font-size: 3.75rem;
    line-height: 70px;
`

const GridLayout = css`
    display: grid;
    column-gap: ${GRID.columnGap};
`

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: ${FONT_SIZE_DEFAULT};
        /* font-family: ${FONT_FAMILY}; */
    }

    strong {
        font-weight: bold;
    }
`

export {
    COLORS,
    DISTANCES,
    GRID,
    TextExtraLarge,
    TextSmall,
    TextMedium,
    TextLarge,
    GridLayout,
}
export default GlobalStyles
