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

// Mock useState globally
jest.mock('react', () => {
  const moduloOriginal = jest.requireActual('react')
  return {
    ...moduloOriginal,
    useState: jest.fn(),
  }
})
let setState: jest.Mock
beforeEach(() => {
  // Cast Explicitly to Jest-Compatible Type
  ;(React.useState as jest.Mock).mockImplementation((init) => [init, setState])
})

describe('LanguagesButon', () => {
  it('should show the LanguagesButtonMenu component on click', () => {
    render(<LanguagesButton />)

    const langesButton = screen.getByTestId('languagesButton')
    fireEvent.click(langesButton)
    expect(screen.getByTestId('langButtonsMenu')).toBeInTheDocument()
  })

  it('should have a mobile layout if rendered with: isMobile={true}', () => {
    render(<LanguagesButton isMobile={true} />)

    const langesButton = screen.getByTestId('mobileLanguageButton')
    expect(langesButton).toBeInTheDocument()
    expect(langesButton).toHaveClass('mobileLanguageButton')
  })

  it('should have a layout for larger screens if rendered without passing the isMobile property', () => {
    render(<LanguagesButton />)
    const langesButton = screen.getByTestId('languageButtonlg')
    expect(langesButton).toBeInTheDocument()
    expect(langesButton).toHaveClass('languageButtonlg')
  })

  it('should do the animation correctly', () => {
    // Mock useState for all three states
    const setStateAnimationKey = jest.fn()
    const setStateIsOpenMenu = jest.fn()
    const setStateIsClicked = jest.fn()

    ;(React.useState as jest.Mock)
      .mockImplementationOnce(() => [0, setStateAnimationKey])
      .mockImplementationOnce(() => [false, setStateIsOpenMenu])
      .mockImplementationOnce(() => [0, setStateIsClicked])
    render(<LanguagesButton />)

    const languageButtonlg = screen.getByTestId('languageButtonlg')

    fireEvent.click(languageButtonlg)
    expect(setStateAnimationKey).toHaveBeenCalledWith(1)
    expect(setStateIsOpenMenu).toHaveBeenCalledWith(true)
  })
  it('should do animation correctly in pat amobile layout', () => {
    const setStateAnimationKey = jest.fn()
    const setStateIsOpenMenu = jest.fn()
    const setStateIsClicked = jest.fn()

    ;(React.useState as jest.Mock)
      .mockImplementationOnce(() => [0, setStateAnimationKey])
      .mockImplementationOnce(() => [false, setStateIsOpenMenu])
      .mockImplementationOnce(() => [0, setStateIsClicked])
    render(<LanguagesButton isMobile={true} />)

    const mobileLanguageButton = screen.getByTestId('mobileLanguageButton')

    fireEvent.click(mobileLanguageButton)
    expect(setStateAnimationKey).toHaveBeenCalledWith(1)
    expect(setStateIsOpenMenu).toHaveBeenCalledWith(true)
  })

  it('should handle click when isClicked is 1', () => {
    const setStateAnimationKey = jest.fn()
    const setStateIsOpenMenu = jest.fn()
    const setStateIsClicked = jest.fn()

    ;(React.useState as jest.Mock)
      .mockImplementationOnce(() => [0, setStateAnimationKey])
      .mockImplementationOnce(() => [false, setStateIsOpenMenu])
      .mockImplementationOnce(() => [1, setStateIsClicked])
    render(<LanguagesButton />)

    const languageButtonlg = screen.getByTestId('languageButtonlg')

    fireEvent.click(languageButtonlg)
    expect(setStateAnimationKey).toHaveBeenCalledWith(1)
    expect(setStateIsOpenMenu).toHaveBeenCalledWith(true)
  })
  it('should handle click when isClicked is 2', () => {
    const setStateAnimationKey = jest.fn()
    const setStateIsOpenMenu = jest.fn()
    const setStateIsClicked = jest.fn()

    ;(React.useState as jest.Mock)
      .mockImplementationOnce(() => [0, setStateAnimationKey])
      .mockImplementationOnce(() => [false, setStateIsOpenMenu])
      .mockImplementationOnce(() => [2, setStateIsClicked])
    render(<LanguagesButton />)

    const languageButtonlg = screen.getByTestId('languageButtonlg')

    fireEvent.click(languageButtonlg)
    expect(setStateAnimationKey).toHaveBeenCalledWith(1)
    expect(setStateIsOpenMenu).toHaveBeenCalledWith(true)
  })
})
