module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-key': 'off',
    },
}
