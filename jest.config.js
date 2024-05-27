export const testEnvironment = 'jsdom'
export const transform = {
  '^.+\\.jsx?$': 'babel-jest',
}
export const moduleFileExtensions = ['js', 'jsx']
export const setupFilesAfterEnv = ['@testing-library/jest-dom/extend-expect']
export const moduleNameMapper = {
  '\\.(css|less)$': 'identity-obj-proxy',
}
