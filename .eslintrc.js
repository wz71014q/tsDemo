module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/typescript', 'airbnb-base'],
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
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ]
};
