module.exports = {
  extends: ['standard'], 
  plugins: ['standard'], 
  rules: {
    'no-unused-vars': 1,
    'semi': 2,
    'indent': [2, 2],
    'no-return-await': 0,
    'space-before-function-paren': [2, {
      'named': 'always',
      'anonymous': 'always',
      'asyncArrow': 'always'
    }],
    'template-curly-spacing': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'no-var': 2,

    // standard plugin
    'standard/object-curly-even-spacing': [2, 'either'],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [2, 'even'],
    'standard/no-callback-literal': [2, ['cb', 'callback']]
  },
  env: {
    'es6': true,
    'node': true
  },
  parserOptions: {
    'ecmaVersion': 8
  }
}