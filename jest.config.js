module.exports = {
  moduleDirectories: ['./src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{jsx,js}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 54,
      branches: 48,
      functions: 44,
      lines: 56,
    },
  },
  testPathIgnorePatterns: ['./setupEnzyme.js', 'coverage', './node_modules/'],
  coveragePathIgnorePatterns: ['./src/constants', './src/labels'],
};
