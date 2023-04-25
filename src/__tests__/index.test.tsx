import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages'

jest.mock('next/router', () => {
  return {
    //se traen todas las propiedades y metodos del next/router
    ...jest.requireActual('next/router'),
    useRouter() {
      return {
        locale: 'en-US',
        locales: ['en-US'],
        asPath: '',
      }
    },
  }
})

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello world/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
