// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
  // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
  // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
  // For example:

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^@/.src/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/.src/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/.src/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/.src/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/components/storyBook/Typography/Component$':
      '<rootDir>/src/components/storyBook/Typography/Component',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/jest.*',
    '<rootDir>/src/__tests__',
    '<rootDir>/node_modules/',
    '<rootDir>/.github',
    '<rootDir>/.next',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'html', 'json', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 80,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
