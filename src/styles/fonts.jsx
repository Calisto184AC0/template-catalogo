import { css } from 'styled-components'

export const text = ({ fontSize = 'medium', lineHeight = 'normal' }) => css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${props => props.fontWeightText || 'normal'};
    color: ${props => props.colorText || 'black'};
`

const TEXT_SMALL = {
    fontSize: 'clamp(14px, 0.833vw, 1rem)',
    lineHeight: 'clamp(21px, 1.302vw, 25px)',
}

const TEXT_MEDIUM = {
    fontSize: 'clamp(16px,0.99vw,1.188rem)',
    lineHeight: 'clamp(25px, 1.51vw, 29px)',
}

const TEXT_LARGE = {
    fontSize: 'clamp(19px,1.563vw,1.875rem)',
    lineHeight: 'clamp(29px, 2.083vw, 40px)',
}

const TEXT_EXTRA_LARGE = {
    fontSize: 'clamp(30px, 3.125vw, 3.75rem)',
    lineHeight: 'clamp(32px, 3.646vw, 70px)',
}

export const textSmall = text(TEXT_SMALL)
export const textMedium = text(TEXT_MEDIUM)
export const textLarge = text(TEXT_LARGE)
export const textExtraLarge = text(TEXT_EXTRA_LARGE)
