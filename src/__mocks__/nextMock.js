const nextMock = jest.createMockFromModule('next')

nextMock.useRouter = jest.fn(() => ({
  locale: 'en-US',
  locales: ['en-US'],
  asPath: '',
}))

nextMock.Router = jest.fn(() => ({
  push: jest.fn(),
  prefetch: jest.fn(),
}))

nextMock.__setBasePath = (basePath) => {
  nextMock.__basePath = basePath
}

module.exports = nextMock
