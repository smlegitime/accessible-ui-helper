// jest.config.js
module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",  // 使用 babel-jest 转换 JavaScript 和 TypeScript 文件
  },
  testEnvironment: "node",
};
