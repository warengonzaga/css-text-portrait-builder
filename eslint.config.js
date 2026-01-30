import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        // Node globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
      },
    },
    rules: {
      // From original config
      'linebreak-style': ['error', 'unix'],
      'quote-props': ['error', 'as-needed'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'only-multiline'],
      'no-mixed-spaces-and-tabs': 'error',
      // Google style guide essential rules
      'max-len': ['error', { code: 80, tabWidth: 2, ignoreUrls: true }],
      'require-jsdoc': 'off', // Too strict, can be enabled if needed
      'valid-jsdoc': 'off',
    },
  },
  {
    ignores: [
      '.yarn/**',
      '.pnp.*',
      '.yarnrc.yml',
      'yarn-error.log',
      '.github/**',
      '.vscode/**',
      'dist/**',
      '.dccache',
      '.parcel-cache/**',
      '.gitpod.yml',
      'node_modules/**',
    ],
  },
];
