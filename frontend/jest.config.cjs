module.exports = {
  testEnvironment: "jsdom",

  setupFiles: ["<rootDir>/jest.setup.cjs"],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.cjs",
  },
};