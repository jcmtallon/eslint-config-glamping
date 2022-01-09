module.exports = {
  extends: [
    '@jcmtallon/eslint-config-glamping-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
}
