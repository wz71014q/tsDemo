module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  configBasedir: './',
  plugins: ['stylelint-scss', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'at-rule-no-unknown': [true,
    {
      ignoreAtRules: ['include', 'mixin', 'extend']
    }],
    'no-invalid-double-slash-comments': null,
    'number-leading-zero': 'never',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ':global,:local',
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    "plugin/declaration-block-no-ignored-properties": true,
    'rule-empty-line-before': 'never-multi-line'
  },
};
