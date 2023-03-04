module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/media-has-caption': [
      0,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      },
    ],
  },
};
