module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: './src/assets',
          core: './src/core',
          navigation: './src/navigation',
          reduxStore: './src/reduxStore',
          screens: './src/screens',
        },
      },
    ],
  ],
};
