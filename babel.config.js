module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@theme': './src/theme',
          '@types': './src/types',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
