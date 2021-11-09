/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["/dist/", "/__tests__/unit/data"],
};
