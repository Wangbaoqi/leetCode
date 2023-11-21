import type { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    color: 'var(--sp-syntax-color-plain)'
  },

  styles: [
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'var(--sp-syntax-color-comment)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'var(--sp-syntax-color-punctuation)'
      }
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
        'tag'
      ],
      style: {
        color: 'var(--sp-syntax-color-tag)'
      }
    },
    {
      types: ['attr-name', 'char', 'builtin', 'parameter', 'selector'],
      style: {
        color: 'var(--sp-syntax-color-property)'
      }
    },
    {
      types: ['function'],
      style: {
        color: 'var(--sp-syntax-color-definition)'
      }
    },
    {
      types: ['string'],
      style: {
        color: 'var(--sp-syntax-color-string)'
      }
    },
    {
      types: [
        'important',
        'atrule',
        'keyword',
        'selector-class',
        'class-name',
        'maybe-class-name',
        'builtin'
      ],
      style: {
        color: 'var(--sp-syntax-color-keyword)'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    }
  ]
};

export default theme;
