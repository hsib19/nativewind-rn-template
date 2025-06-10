module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(nativewind|react-native|react-native-gesture-handler|@react-native|@gorhom|react-redux|react-native-css-interop)/)',
  ],
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
};
