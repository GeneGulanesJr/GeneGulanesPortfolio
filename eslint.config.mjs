// ESLint v9 flat config. Bridges the legacy @upstatement/eslint-config
// preset via FlatCompat — @upstatement/eslint-config@3.0.0 still ships
// .eslintrc-style files (index.js, react.js, vue.js), not a flat config.

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: [
      '.cache/**',
      'public/**',
      'node_modules/**',
      '.yarn/**',
    ],
  },
  ...compat.extends('@upstatement/eslint-config/react'),
  {
    settings: {
      react: { version: 'detect' },
    },
  },
];
