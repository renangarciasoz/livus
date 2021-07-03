import config from './jest.config'

config.testRegex = 'integ\\.spec\\.ts(x)?$'
config.coveragePathIgnorePatterns = [
  ...config.coveragePathIgnorePatterns,
  '.spec.ts|tsx',
]
config.coverageThreshold = {
  global: {
    branches: 15,
    functions: 20,
    lines: 50,
    statements: 50,
  },
}
console.log('RUNNING INTEGRATION TESTS')
module.exports = config
