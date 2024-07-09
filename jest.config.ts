import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{ts,tsx}',
    '<rootDir>/pages/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/.next/',
  ],
  coverageDirectory: '<rootDir>/coverage',
};

export default createJestConfig(customJestConfig);
