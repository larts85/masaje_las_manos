import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LangButtons from '.'

const mockRouter = jest.fn()

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockRouter(),
}))

describe('LangButtons', () => {
  it('should renders a button for each available language', () => {
    mockRouter.mockReturnValue({
      asPath: '/',
      locale: 'en-US',
      locales: ['en-US', 'es-AR', 'pt-BR'],
    })
    render(<LangButtons />)

    const spanishButton = screen.getByRole('link', { name: /es/i })
    expect(spanishButton).toBeInTheDocument()
  })

  // it('should not generate a button for the current language', () => {
  //   mockRouter.mockReturnValue({
  //     asPath: '/',
  //     locale: 'en-US',
  //     locales: ['en-US', 'es-AR', 'pt-BR'],
  //   })
  //   render(<LangButtons />)

  //   const englishButton = screen.queryByRole('link', { name: /en/i })
  //   expect(englishButton).not.toBeInTheDocument()
  // })

  it.skip('should change path on button click', () => {
    const onMock = jest.fn(() => Promise.resolve(true))
    const emitMock = jest.fn(() => Promise.resolve(true))
    const pushMock = jest.fn(() => Promise.resolve(true))

    mockRouter.mockImplementation(() => ({
      push: pushMock,
      prefetch: () => Promise.resolve(true),
      asPath: 'pt-BR',
      events: {
        off: jest.fn(),
        emit: emitMock,
        on: onMock,
      },
    }))

    render(<LangButtons />)

    const portugueseButton = screen.getByRole('button', { name: /pt/i })
    fireEvent.click(portugueseButton)

    expect(pushMock).toHaveBeenCalled()
    expect(emitMock).toHaveBeenCalled()
    expect(onMock).toHaveBeenCalled()
  })
})
