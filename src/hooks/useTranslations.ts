import { useRouter } from 'next/router'
import languages, { TranslationFile } from '@/locales/resources'

const useTranslations = () => {
  const { locale, locales } = useRouter()
  const translations = languages[locale!] as TranslationFile

  return { translations, currentLang: locale, langs: locales }
}

export default useTranslations
