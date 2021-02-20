module.exports = {
  "setupFiles": [
    "<rootDir>/src/test/test-shim.js",
    "jest-canvas-mock"
  ],
  setupFilesAfterEnv: [ '<rootDir>/src/test/setup.jest.ts' ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "<rootDir>/src/test/test-preprocessor.js"
  },
  "moduleNameMapper": {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/src/tests/__mocks__/styleMock.js"
  },
  "testMatch": [
    "**/*.test.(ts|tsx|js)"
  ]
};
