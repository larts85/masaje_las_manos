import { renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import useTranslations from './useTranslations'

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

describe('useTranslations', () => {
  it('should return the correct translations, currentLang and langs', () => {
    const { result } = renderHook(() => useTranslations())
    const { translations, currentLang, langs } = result.current
    expect(translations.home.greeting).toBe('Hello world')
    expect(currentLang).toBe('en-US')
    expect(langs).toContain('pt-BR')
  })
})
