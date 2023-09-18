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
  it('should render the LanguageButton according to screen size', () => {
    renderHeader()
    const mobileLanguageButtonHeader = screen.getByTestId(
      'mobile-language-button-header',
    )
    expect(mobileLanguageButtonHeader).toBeInTheDocument()
    expect(mobileLanguageButtonHeader).toHaveClass('flex')

    const languageButton = screen.getByTestId('language-button')
    expect(languageButton).toBeInTheDocument()
    expect(languageButton).toHaveClass('flex')
  })

  it('Should render the Navbar component according to screen size', () => {
    renderHeader()

    const mobileNavbar = screen.getByTestId('mobile-navbar')
    expect(mobileNavbar).toBeInTheDocument()
    expect(mobileNavbar).toHaveClass(`lg:hidden`)

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
    expect(navbar).toHaveClass('flex-1')
  })
})
