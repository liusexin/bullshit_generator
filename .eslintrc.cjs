module.exports = {
    extends: 'eslint-config-sprite',
    "env": {
        "browser": true,
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: ['html'],
    "rules": {
        complexity: ['warn', 25],
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      'no-func-assign': 'off',
      'no-console': 'off',
    }
}