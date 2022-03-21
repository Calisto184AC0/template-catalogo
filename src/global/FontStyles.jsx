import { createGlobalStyle } from 'styled-components'
import InterBold from '../assets/fonts/Inter-Bold.ttf'
import InterRegular from '../assets/fonts/Inter-Regular.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: local('Inter'),
            url(${InterBold});
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter'),
            url(${InterRegular});
        font-weight: normal;
        font-style: normal;
    }
`

export default FontStyles
