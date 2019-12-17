module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/typescript', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
  plugins: ['vue', 'html', '@typescript-eslint'],
  globals: {
    window: true
  },
  parser: "vue-eslint-parser",
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
    },
    'import/extensions': [
      '.js',
      '.ts',
      '.jsx',
      '.tsx'
    ]
  },
  rules: {
    'no-mixed-operators': 0,
    'comma-dangle': 0,
    "import/extensions": [ 0, "ignorePackages", {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  }
};
