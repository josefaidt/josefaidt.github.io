module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: [
    'prettier',
    'react',
    'standard',
    'jsx-a11y'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'impliedStrict': true,
      'classes': true,
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  rules: {
    'strict': 0,
    'no-console': 'warn',
    'no-var': 2,
    'no-unused-vars': [1, { 'argsIgnorePattern': 'res|next|^err|reject' }],
    'no-tabs': 2,
    'no-param-reassign': [2, { 'props': false }],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],

    'prefer-const': [2, { 'destructuring': 'all' }],

    // standard plugin - options
    // 'standard/object-curly-even-spacing': [2, 'either'],
    // 'standard/array-bracket-even-spacing': [2, 'either'],
    // 'standard/computed-property-even-spacing': [2, 'even'],
    'standard/no-callback-literal': [2, ['cb', 'callback']],

    // react plugin - options
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,

    // prettier
    'prettier/prettier': [2, {
      'trailingComma': 'none',
      'singleQuote': true,
      'semi': false,
      'tabWidth': 2,
      'printWidth': 100,
      'bracketSpacing': true,
      'jsxBracketSameLine': true,
      'arrowParens': 'avoid'
    }]
  }
}