module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/dist/'], // Eğer dist klasörünüzü göz ardı etmek istiyorsanız
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
  