module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/typescript', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
  plugins: ['vue', 'html', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-mixed-operators': 0
  }
};
