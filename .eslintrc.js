module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    'no-negated-condition': 'error',
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
    }],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx'],
    }],
    'react/no-direct-mutation-state': 'error',
    'react/void-dom-elements-no-children': 'error',
    'id-length': ['error', {
      min: 3,
      properties: 'never',
      exceptions: ['_'],
    }],
    'padded-blocks': 'off',
    'no-restricted-globals': ['error', 'event'],
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
      argsIgnorePattern: '_',
    }],
  },
};
