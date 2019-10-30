module.exports = {
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // parser: 'babel-eslint',
    parser: "@typescript-eslint/parser"
  },
  plugins: ['@typescript-eslint', 'vue', 'html'],
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true,
    mocha: true,
  },
  globals: {
    window: true,
    $: true,
    THREE: true,
    Stats: true,
    dat: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-var': 2,
    // 'no-use-before-define': 'off',
    'linebreak-style': [0, 'windows'],
    'no-console': 0,
    'func-names': 0,
    'prefer-const': 0,
    'prefer-template': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'max-len': 0,
    'prefer-destructuring': 0,
    'comma-dangle': [0, 'never'],
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@/'],
      },
    ],
    'global-require': 'off',
    'import/extensions': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
