module.exports = {
  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb'],
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
    // vue规则：https://eslint.vuejs.org/rules/
    "vue/html-closing-bracket-newline": 0, // vue html标签'>'不需要换行
    "vue/html-self-closing": 0, // 禁止强制自闭合HTML标签
    "vue/max-attributes-per-line": [2, { // 属性超过5个强制换行
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": false
      }
    }],
    "vue/order-in-components": [2, { // vue 按照官方推荐页面元素顺序排序
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
};
