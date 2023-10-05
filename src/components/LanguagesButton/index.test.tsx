import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguagesButton from '.'
import React from 'react'

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

describe('LanguagesButon', () => {
  it('should show the LanguagesButtonMenu component on click', () => {
    render(<LanguagesButton />)

    const langesButton = screen.getByTestId('language-button-lg')
    fireEvent.click(langesButton)
    expect(screen.getByTestId('language-button-menu')).toBeInTheDocument()
  })

  // it('should have a mobile layout if rendered with: isMobile', () => {
  //   render(<LanguagesButton isMobile />)

  //   const mobileLanguageButton = screen.getByTestId('mobile-language-button')
  //   expect(mobileLanguageButton).toBeInTheDocument()
  //   expect(mobileLanguageButton).toHaveClass('mobileLanguageButton')
  // })

  // it('should have a layout for larger screens if rendered without passing the isMobile property', () => {
  //   render(<LanguagesButton />)
  //   const languageButtonlg = screen.getByTestId('language-button-lg')
  //   expect(languageButtonlg).toBeInTheDocument()
  //   expect(languageButtonlg).toHaveClass('languageButton')
  // })
})
