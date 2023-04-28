import Link from 'next/link'
import { useRouter } from 'next/router'

const LangButtons = () => {
  const { asPath, locale, locales } = useRouter()

  return (
    <nav>
      {locales!.map(
        (lang) =>
          locale !== lang && (
            <Link key={lang} locale={lang} href={asPath}>
              <div role="button">{lang.split('-')[0]}</div>
            </Link>
          ),
      )}
    </nav>
  )
}

export default LangButtons
