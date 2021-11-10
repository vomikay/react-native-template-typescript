module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          core: './src/core',
          navigation: './src/navigation',
          screens: './src/screens',
        },
      },
    ],
  ],
};
