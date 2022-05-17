import { css } from 'styled-components'

export const DISTANCES = {
    small: '1.563rem',
    medium: '3.125rem',
    long: '6.25rem',
}

export const TABLET_SIZE = '980px'
export const MOBILE_SIZE = '480px'

export const mediaQueryTablet = content => css`
    @media (max-width: ${TABLET_SIZE}) {
        ${content}
    }
`

export const mediaQueryMobile = content => css`
    @media (max-width: ${MOBILE_SIZE}) {
        ${content}
    }
`
