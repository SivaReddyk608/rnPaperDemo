module.exports = {
  root: true,
  plugins: ['react-native'],
  extends: ['airbnb', 'airbnb/hooks'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': ['error', {
      groups: ['builtin', 'external', ['sibling', 'parent', 'internal'], 'index'],
      'newlines-between': 'always-and-inside-groups'
    }],
    'object-curly-newline': ['error', { consistent: true }],
    'no-class-assign': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/forbid-prop-types': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/prop-types': ['off'],
    semi: ['error', 'never'],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
    }],
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': ['error', 'asc']
  }
}