import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { Linter } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig: Linter.Config = {
  extends: [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-multi-spaces': 'error',
  },
};

export default eslintConfig;