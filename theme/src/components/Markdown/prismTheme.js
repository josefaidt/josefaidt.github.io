import _theme from '../theme'
const { prism } = _theme
const theme = {
  plain: {
    backgroundColor: prism.background,
    color: prism.text,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: prism.comment,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property'],
      style: {
        color: prism.text,
      },
    },
    {
      types: ['tag', 'punctuation', 'operator'],
      style: {
        color: prism.punctuation,
      },
    },
    {
      types: ['function', 'attr-name'],
      style: {
        color: prism.orange,
      },
    },
    {
      types: ['function', 'attr-name', 'selector'],
      style: {
        color: prism.orange,
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: prism.yellow,
      },
    },
    {
      types: ['parameter'],
      style: {
        color: prism.green,
      },
    },
    {
      types: ['variable'],
      style: {
        color: prism.green,
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: prism.green,
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: [
        'entity',
        'attr-value',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'keyword',
        'placeholder',
        'module',
      ],
      style: {
        color: prism.purple,
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
  ],
}

export default theme
