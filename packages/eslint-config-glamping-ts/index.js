module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['@jcmtallon/eslint-config-glamping-base'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Temp: for testing purposes
    semi: [2, 'never'],
  },
}
