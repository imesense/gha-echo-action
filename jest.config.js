/** @type {import('jest').Config} */
const config =
{
    verbose: true,

    moduleFileExtensions: [
        'js'
    ],

    testEnvironment: 'node',
    testMatch: [
        '**/*.test.js'
    ],
    testPathIgnorePatterns: [
        '/dist/',
        '/node_modules/'
    ],

    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: [
        './src/**'
    ],

    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ],
    coverageReporters: [
        'json-summary',
        'text',
        'lcov'
    ],

    transform: {}
};

export default config;
