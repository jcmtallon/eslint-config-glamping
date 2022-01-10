module.exports = {
  extends: [
    '@jcmtallon/eslint-config-glamping-react',
    '@jcmtallon/eslint-config-glamping-ts/lib/shared.js',
    './rules/react'
  ].map(require.resolve),
}
