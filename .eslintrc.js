module.exports = {
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    '*.js'
  ]
}
