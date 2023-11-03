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
})
