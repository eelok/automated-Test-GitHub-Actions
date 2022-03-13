module.exports = {
    coverageReporters: [
        "lcov", "text"
    ],
    testPathIgnorePatterns: [
        'e2e'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 30,
            lines: 80,
            statements: 80
        }
    }
};
