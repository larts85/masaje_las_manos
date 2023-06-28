import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangButtons = () => {
  const { asPath } = useRouter()
  const { currentLang, langs } = useTranslations()

  return (
    <nav>
      {langs!.map(
        (lang) =>
          currentLang !== lang && (
            <Link key={lang} locale={lang} href={asPath}>
              <div role="button">{lang.split('-')[0]}</div>
            </Link>
          ),
      )}
    </nav>
  )
}

LangButtons.displayName = 'LangButtons'

export default LangButtons
