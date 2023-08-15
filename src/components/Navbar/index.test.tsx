import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './index'

jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter() {
      return {
        locale: 'en-US',
        locales: ['en-US', 'es-AR', 'pt-BR'],
        asPath: '',
      }
    },
  }
})

describe('Navbar Componnet', () => {
  it('It should render all browser elements according to the selected language', () => {
    render(<Navbar />)

    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument()

    const services = screen.getByText('Services')
    expect(services).toBeInTheDocument()

    const contact = screen.getByText('Contact')
    expect(contact).toBeInTheDocument()

    const about = screen.getByText('About')
    expect(about).toBeInTheDocument()
  })
})
