import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

// Flat config scoped to the shippable packages (the library + the Nuxt module).
// The demo is intentionally excluded — its Nuxt auto-imports (definePageMeta,
// useRoute, navigateTo, component globals…) need @nuxt/eslint to lint cleanly.
export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/node_modules/**',
      '**/*.d.ts',
      'apps/**',
      'scripts/**',
      '**/*.config.{js,ts,mjs}',
    ],
  },

  // Lint only the package sources.
  {
    files: ['packages/*/src/**/*.{ts,vue}'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    files: ['packages/*/src/**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },

  {
    files: ['packages/*/src/**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Allow intentional throwaways prefixed with `_`.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
    },
  }
)
