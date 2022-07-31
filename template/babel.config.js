module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@screens': './src/screens',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
