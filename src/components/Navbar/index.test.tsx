import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './index'

jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter() {
      return {
        locale: 'en-US',
        locales: ['en-US', 'es-AR', 'pt-BR'],
        asPath: '/',
      }
    },
  }
})

describe('Navbar Component', () => {
  it('Navigation links redirect to the correct pages', () => {
    render(<Navbar />)

    const aboutLink = screen.getByText('About')
    expect(aboutLink).toBeInTheDocument()
    fireEvent.click(aboutLink)
    const Aboutpage = screen.getByText('Contact')
    expect(Aboutpage).toBeInTheDocument()

    const contactLink = screen.getByText('About')
    expect(contactLink).toBeInTheDocument()
    fireEvent.click(aboutLink)
    const contactPage = screen.getByText('About')
    expect(contactPage).toBeInTheDocument()

    const servicesLink = screen.getByText('Services')
    expect(servicesLink).toBeInTheDocument()
    fireEvent.click(aboutLink)
    const servicesPage = screen.getByText('About')
    expect(servicesPage).toBeInTheDocument()
  })
})
