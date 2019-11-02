module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    souceType: 'module'
  },
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    // 'prefer-const': 'off',
    curly: ['error', 'multi-or-nest'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'warn'
  }
}
