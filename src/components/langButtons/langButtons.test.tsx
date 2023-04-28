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
        asPath: '',
      }
    },
  }
})

describe('LangButtons', () => {
  it('renders a button for each available language', () => {
    render(<LangButtons />)

    const englishButton = screen.queryByRole('button', { name: /en/i })
    const spanishButton = screen.queryByRole('button', { name: /es/i })
    expect(englishButton).toEqual(null)
    expect(spanishButton).toBeInTheDocument()
  })

  it('redirects to the selected language when a button is clicked', async () => {
    const { debug } = render(<LangButtons />)
    debug()
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    const currentUrl = await window.location.href
    expect(currentUrl).toContain('/es')
  })
})
