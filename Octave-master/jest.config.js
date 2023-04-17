module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    setupFilesAfterEnv: [
      "<rootDir>/__tests__/mocks/localStorageMock.js"
    ],
    testEnvironment: 'jsdom'
  };