module.exports = {
    "testEnvironment": "node",
    "clearMocks": true,
    "collectCoverage": true,
    "coverageDirectory": "build/coverage",
    "coveragePathIgnorePatterns": [
        "/build/",
        "/jest/",
        "/mock-data/",
        "/mocks/",
        "/node_modules/",
        "/swagger/",
        "/index.js",
        "/api.js"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 50,
            "functions": 35,
            "lines": 50,
            "statements": 50
        }
    },
}