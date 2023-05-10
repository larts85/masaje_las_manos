import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages'

const mockRouter = jest.fn()
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockRouter(),
}))

describe('Home', () => {
  it('renders a heading', () => {
    mockRouter.mockReturnValue({
      asPath: '/',
      locale: 'en-US',
      locales: ['en-US', 'es-AR', 'pt-BR'],
    })

    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello world/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders a heading', () => {
    mockRouter.mockReturnValue({
      asPath: '/',
      locale: 'es-AR',
      locales: ['en-US', 'es-AR', 'pt-BR'],
    })

    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /hola mundo/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
