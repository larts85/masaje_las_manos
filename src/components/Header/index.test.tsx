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
  it('should render the language button according to screen size', () => {
    renderHeader()
    const mobilelanguageButton = screen.getByTestId('mobileLanguageButton')
    expect(mobilelanguageButton).toBeInTheDocument()
    expect(mobilelanguageButton).toHaveClass('mobileLanguageButton')
    const languageButton = screen.getByTestId('languageButton')
    expect(languageButton).toBeInTheDocument()
    expect(languageButton).toHaveClass('languageButton')
  })
  it('should be rendered when clicking on the language button, the LanButtons component', () => {
    renderHeader()

    const langButtons = screen.queryByTestId('langButtons')
    expect(langButtons).not.toBeInTheDocument()
  })
})
