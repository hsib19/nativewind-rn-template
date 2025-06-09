module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules/(?!nativewind|react-native|...)'],
  setupFiles: ['./jest.setup.js'],
};
