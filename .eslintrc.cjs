module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier'
  ],
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  plugins: ['unused-imports', '@typescript-eslint', 'prettier'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    // Vue
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/require-name-property': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/require-default-prop': 'error',
    'vue/no-mutating-props': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: []
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        ignore: []
      }
    ],

    'vue/multi-word-component-names': 'off',

    'arrow-parens': ['error', 'always'],
    'no-void': ['error', { allowAsStatement: true }],
    'no-undef': 'off',
    'no-console': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'require-await': ['error'],

    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    semi: 'off',
    'no-unused-expressions': 'off', // There is a TS analog @typescript-eslint/no-unused-expressions, this rule does not take into account the operator ?.
    'no-useless-constructor': 'off', // Used instead @typescript-eslint/no-useless-constructor

    'prefer-promise-reject-errors': 'off',

    // TypeScript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-unused-vars': 'off', // used 'unused-imports/no-unused-vars-ts' instead
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': ['error', { vars: 'all', args: 'none', varsIgnorePattern: '^_' }],
    'import/no-default-export': 'off',
    'import/no-unresolved': ['error', { ignore: ['@*'] }],
    'import/extensions': 'off'
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-default-export': 'off'
      },
      env: {
        jest: true
      }
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'import/no-default-export': 'off'
      }
    }
  ]
}
