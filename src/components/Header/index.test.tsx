import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

const renderHeader = () => {
  return render(<Header />)
}

const mockRouter = jest.fn()

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockRouter(),
}))
mockRouter.mockReturnValue({
  asPath: '/',
  locale: 'en-US',
  locales: ['en-US', 'es-AR', 'pt-BR'],
})

describe('Header Component', () => {
  it('should render the Logo component with the style that corresponds to the screen size', () => {
    renderHeader()

    const logoImage = screen.getByTestId('logoImage')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveClass('logoImage')

    const logoImageTextSm = screen.getByTestId('logoImageTextSm')
    expect(logoImageTextSm).toBeInTheDocument()
    expect(logoImageTextSm).toHaveClass('logoImageTextSm')

    const logoImageTextLg = screen.getByTestId('logoImageTextLg')
    expect(logoImageTextLg).toBeInTheDocument()
    expect(logoImageTextLg).toHaveClass('logoImageTextLg')
  })

  it('should render the LanguageButton according to screen size', () => {
    renderHeader()
    const mobileLanguageButtonHeader = screen.getByTestId(
      'mobileLanguageButtonHeader',
    )
    expect(mobileLanguageButtonHeader).toBeInTheDocument()
    expect(mobileLanguageButtonHeader).toHaveClass('mobileLanguageButtonHeader')

    const languageButton = screen.getByTestId('languageButton')
    expect(languageButton).toBeInTheDocument()
    expect(languageButton).toHaveClass('languageButton')
  })

  it('Should render the Navbar component according to screen size', () => {
    renderHeader()

    const mobileNavbar = screen.getByTestId('mobileNavbar')
    expect(mobileNavbar).toBeInTheDocument()
    expect(mobileNavbar).toHaveClass('mobileNavbar')

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
    expect(navbar).toHaveClass('navbar')
  })
})
