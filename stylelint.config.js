module.exports = {
  extends: 'stylelint-config-standard',
  configBasedir: './',
  plugins: ['stylelint-scss'],
  rules: {
    'no-invalid-double-slash-comments': null,
    'number-leading-zero': 'never',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ':global,:local',
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'rule-empty-line-before': 'never-multi-line'
  },
};
