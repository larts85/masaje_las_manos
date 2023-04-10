import Link from 'next/link'
import { useRouter } from 'next/router'

const LangButtons = () => {
  const { asPath, locale, locales } = useRouter()

  return (
    <nav>
      {locales.map(
        (lang) =>
          locale !== lang && (
            <Link key={lang} locale={lang} href={asPath}>
              <div key={lang}>{lang.split('-')[0]}</div>
              {/* {lang.split('-')[0]} */}
            </Link>
          ),
      )}
    </nav>
  )
}

export default LangButtons
