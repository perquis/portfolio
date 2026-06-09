import type { Config } from "@jest/types";

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config.InitialOptions = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  json: true,
  verbose: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  passWithNoTests: true,
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false,
      },
    },
  },
};

module.exports = createJestConfig(config);
