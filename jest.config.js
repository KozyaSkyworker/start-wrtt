module.exports = {
  roots: ['./src'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['!node_modules/'],
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
  testRegex: '.(test|spec).(js?|jsx?|ts?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
