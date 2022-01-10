const { rules: reactRules } = require('@jcmtallon/eslint-config-glamping-react/rules/react')

module.exports = {
  settings: {
    // Append 'ts' 'tsx' extensions to base 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },

  rules: {
    // only .jsx and .tsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [reactRules['react/jsx-filename-extension'][0], { extensions: ['.jsx', '.tsx'] }],
  }
}
