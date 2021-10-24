module.exports = {
  plugins: [
    'babel-plugin-typescript-to-proptypes',
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
  ],
};
