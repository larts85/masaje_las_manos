import { useRouter } from 'next/router'
import languages, { TranslationFile } from '@/locales/resources'

const useTranslations = () => {
  const { locale, locales } = useRouter()
  const translations = languages[locale!] as TranslationFile

  return { translations, currentLang: locale, langs: locales }
}
// ejemplo const { locale: currentLang } = useRouter();
//estamos extrayendo la propiedad locale del objeto devuelto por useRouter y asignándola a una nueva variable llamada currentLang
//locale: currentLang establece que queremos renombrar la propiedad locale como currentLang

export default useTranslations
