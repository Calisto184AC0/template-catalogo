import { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const FONT_SIZE_DEFAULT = '16px'
const FONT_FAMILY = 'Poppins'

const DISTANCES = {
    small: '1.563rem',
    medium: '3.125rem',
    long: '6.25rem',
}

const TABLET_SIZE = '980px'

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

const Column4 = css`
    grid-column: 5 / span 4;

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 1 / -1;
    }
`

const Column5 = css`
    grid-column: 5 / span 5;

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 1 / -1;
    }
`

const Column6 = css`
    grid-column: 5 / span 6;

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 1 / -1;
    }
`

const Column7 = css`
    grid-column: 5 / span 7;

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 1 / -1;
    }
`

const Column8 = css`
    grid-column: 5 / span 8;

    @media (max-width: ${TABLET_SIZE}) {
        grid-column: 1 / -1;
    }
`

const Text = css`
    color: ${props => props.color || ''};
`

const TextSmall = css`
    ${Text}
    font-size: clamp(14px, 0.833vw, 1rem);
    line-height: clamp(21px, 1.302vw, 25px);
`

const TextMedium = css`
    ${Text}
    font-size: clamp(16px,0.99vw,1.188rem);
    line-height: clamp(25px, 1.51vw, 29px);
`

const TextLarge = css`
    ${Text}
    font-size: clamp(19px,1.563vw,1.875rem);
    line-height: clamp(29px, 2.083vw, 40px);
`

const TextExtraLarge = css`
    ${Text}
    font-size: clamp(30px, 3.125vw, 3.75rem);
    line-height: clamp(32px, 3.646vw, 70px);
`

const GridLayout = css`
    display: grid;
    column-gap: ${GRID.columnGap};
`

const GlobalStyles = createGlobalStyle`
    html {
        //scroll-behavior: smooth;
    }

    body {
        font-size: ${FONT_SIZE_DEFAULT};
        /* font-family: ${FONT_FAMILY}; */
    }

    strong {
        font-weight: bold !important;
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
    TABLET_SIZE,
    Column4,
    Column5,
    Column6,
    Column7,
    Column8,
}
export default GlobalStyles
