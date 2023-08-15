import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguagesButton from '.'

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
  it('should show the LanguagesButton component on click', () => {
    render(<LanguagesButton />)

    const langesButton = screen.getByTestId('languagesButton')
    fireEvent.click(langesButton)
    expect(screen.getByTestId('langButtonsMenu')).toBeInTheDocument()
  })
})
