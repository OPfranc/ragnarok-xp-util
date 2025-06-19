import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
    files: ["**/*.{js,jsx,ts,tsx}"],
'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'comma-style': ['error', 'last'],
    'max-depth': ['warn', 2],
    'no-ex-assign': 'error',
    'func-name-matching': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],
    'operator-assignment': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': ['warn', {
      'VariableDeclarator': { 'array': false, 'object': true },
      'AssignmentExpression': { 'array': true, 'object': true }
    }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    'prefer-named-capture-group': 'warn',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'for-direction': 'error',
    'prefer-object-spread': 'warn',
    'prefer-rest-params': 'error',
    'prefer-exponentiation-operator': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'no-self-compare': 'warn',
    'no-duplicate-imports': 'off',
    'no-else-return': 'warn',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-multi-spaces': 'error',
    'block-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'dot-location': ['error', 'property'],
    'rest-spread-spacing': ['error', 'never'],
    'operator-linebreak': ['error', 'before', { 'overrides': { '&&': 'ignore' } }],
    'no-extra-semi': 'error',
    'react/react-in-jsx-scope': 'warn',
    'import/first': 'error',
    'import/newline-after-import': ['error', { 'count': 2, 'exactCount': true, 'considerComments': false }],
    'import/order': ['error', {
      "newlines-between": "always",
      'groups': [
        ['builtin', 'external'],
        ['internal'],
        ['parent'],
        ['index'],
        ['sibling'],
        ['type'],
      ],
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      },
      'pathGroupsExcludedImportTypes': ['type'],
      'newlines-between': 'never',
    }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 },],
  },
  },
];

export default eslintConfig;
