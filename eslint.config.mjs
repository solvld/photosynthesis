import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // next + typescript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  ...compat.extends('plugin:prettier/recommended'),

  ...compat.extends('plugin:@typescript-eslint/recommended'),

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },

  {
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/jsx-no-useless-fragment': 'warn',

      'prettier/prettier': 'warn',

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
  },
];

export default eslintConfig;
