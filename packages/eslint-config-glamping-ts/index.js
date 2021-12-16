module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Temp: for testing purposes
    semi: [2, 'never'],
  },
}
