module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended', '@vue/typescript', 'airbnb-base'], //定义文件继承的子规范
  plugins: ['@typescript-eslint', 'vue', 'html'], //定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    // parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
