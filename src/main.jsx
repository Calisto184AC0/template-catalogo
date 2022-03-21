import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FontStyles from './global/FontStyles'
import GlobalStyles from './global/GlobalStyles'
import ResetStyles from './global/ResetStyles'

ReactDOM.render(
    <React.StrictMode>
        <ResetStyles />
        <FontStyles />
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
