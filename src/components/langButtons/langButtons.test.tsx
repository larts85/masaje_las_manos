import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LangButtons from '../langButtons'
import { debug } from 'console'

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

describe('LangButtons', () => {
  it('should renders a button for each available language', () => {
    render(<LangButtons />)
    const spanishButton = screen.queryByRole('button', { name: /es/i })
    expect(spanishButton).toBeInTheDocument()
  })

  it('should not generate a button for the current language', () => {
    render(<LangButtons />)

    const englishButton = screen.queryByRole('button', { name: /en/i })
    expect(englishButton).not.toBeInTheDocument()
  })

  it('should redirect to the selected language when a button is clicked', async () => {
    const { debug } = render(<LangButtons />)
    debug()
    const spanishButton = screen.queryByRole('button', { name: /es/i })
    fireEvent.click(spanishButton)
    expect(window.location.href).toContain('es')
  })
})
