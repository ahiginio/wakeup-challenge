/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.service.{js,ts}'],

  coverageThreshold: {
    global: {
      lines: 90,
      functions: 90,
    },
  },
  testTimeout: 30000,
};
