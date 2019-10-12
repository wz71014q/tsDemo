const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  silent: false,
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'vue'], // 处理这些文件
  moduleDirectories: ['node_modules', 'assets'], // 从这些目录去查找资源
  moduleNameMapper: { // 解析文件路径, identity-obj-proxy是模拟输入
    '^@/(.*)$': '<rootDir>/assets',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  transform: { // 可以理解成loader
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // testPathIgnorePatterns: [ // 忽略测试文件
  //   '<rootDir>/projects/',
  //   '<rootDir>/test/sub.test.js'
  // ],
  testRegex: 'slot.test.js', // 测试单个文件
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'], // 快照的序列化工具
  collectCoverage: false, // 测试覆盖率
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [ // 测试覆盖率
    '<rootDir>/test/testDemo/**/*.{js,vue}',
    '!**/node_modules/**'
  ]
};
