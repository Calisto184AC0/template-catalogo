import { css } from 'styled-components'
import { DISTANCES, mediaQueryMobile, mediaQueryTablet } from './sizes'

export const column_start_end = (start = 'auto', end = 'auto') => css`
    grid-column: ${start} / ${end};
    ${mediaQueryTablet(css`
        grid-column: 1 / -1;
    `)}
`
export const column_total = column_start_end(1, -1)

export const column_1_span2 = column_start_end(1, 'span 2')

export const column_3_span2 = column_start_end(3, 'span 2')

export const column_5_span8 = column_start_end(5, 'span 8')
export const column_5_span7 = column_start_end(5, 'span 7')
export const column_5_span6 = column_start_end(5, 'span 6')
export const column_5_span5 = column_start_end(5, 'span 5')
export const column_5_span4 = column_start_end(5, 'span 4')
export const column_5_span3 = column_start_end(5, 'span 3')

export const gridLayoutTemplate = (
    {
        numColumns = 1,
        columnGap = 'normal',
        rowGap = 'normal',
        horizontalSpace = 0,
        verticalSpace = 0,
    },
    ...moreStyles
) => css`
    display: grid;
    grid-template-columns: repeat(${numColumns}, 1fr);
    column-gap: ${columnGap};
    row-gap: ${rowGap};
    padding: ${verticalSpace} ${horizontalSpace};

    ${moreStyles}
`

const SECCION_GRID = {
    numColumns: 12,
    columnGap: DISTANCES.small,
    rowGap: DISTANCES.medium,
    horizontalSpace: `clamp(${DISTANCES.small}, 2.604vw, ${DISTANCES.medium})`,
    verticalSpace: DISTANCES.long,
}

export const seccionLayout = gridLayoutTemplate(
    SECCION_GRID,
    mediaQueryTablet(css`
        grid-template-columns: repeat(4, 1fr);
    `)
)

const DOWNLOAD_GRID = {
    numColumns: 4,
    columnGap: DISTANCES.small,
    rowGap: DISTANCES.medium,
}

export const downloadLayout = gridLayoutTemplate(
    DOWNLOAD_GRID,
    mediaQueryMobile(css`
        grid-template-columns: repeat(2, 1fr);
    `)
)
