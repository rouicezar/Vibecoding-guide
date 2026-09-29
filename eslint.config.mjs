import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
// Browser scripts and canonical learning data are the typed runtime boundary.
export default defineConfig(
  {
    ignores: [
      'dist/**',
      'dist-pages/**',
      '.astro/**',
      '.tmp/**',
      'node_modules/**',
    ],
  },
  {
    files: [
      'src/scripts/**/*.ts',
      'src/data/learning*.ts',
      'src/data/micro-actions.ts',
    ],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: Object.fromEntries(
        [
          'window',
          'document',
          'location',
          'navigator',
          'localStorage',
          'sessionStorage',
          'crypto',
          'console',
          'URL',
          'URLSearchParams',
          'HTMLElement',
          'HTMLDetailsElement',
          'HTMLAnchorElement',
          'HTMLInputElement',
          'HTMLTextAreaElement',
          'HTMLSelectElement',
          'HTMLButtonElement',
          'Element',
          'Event',
          'CustomEvent',
          'Node',
          'IntersectionObserver',
          'MutationObserver',
          'requestAnimationFrame',
          'cancelAnimationFrame',
          'setTimeout',
          'clearTimeout',
          'addEventListener',
          'scrollY',
          'scrollTo',
          'matchMedia',
          'getComputedStyle',
          'alert',
          'history',
        ].map((key) => [key, 'readonly']),
      ),
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
);
