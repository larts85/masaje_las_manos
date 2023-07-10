import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  menu,
  ul,
  tilde,
  menuMobile,
  linkMenuMobile,
  linkMenu,
  ulMobile,
} from './langButtonsStyle'
import { ReactNode } from 'react'
import { LanguageButtonProps } from './langButtons.types'
import { FC } from 'react'

const LangButtons: FC<LanguageButtonProps> = ({ mobile = false }) => {
  const { asPath } = useRouter()
  const { currentLang, langs } = useTranslations()

  const fullLanguages: { [key: string]: ReactNode } = {
    en: 'English',
    pt: 'Português',
    es: 'Español',
  }

  return (
    <div className={mobile ? menuMobile : menu}>
      <ul className={mobile ? ulMobile : ul}>
        {langs!.map((lang) => (
          <li key={lang} className={mobile ? linkMenuMobile : linkMenu}>
            {currentLang === lang && !mobile && (
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={tilde}
              >
                <path
                  d="M1.95894 9.33858L5.29962 11.5569"
                  stroke="#333333"
                  strokeWidth="2"
                />
                <path
                  d="M5.37172 12.7846L11.6997 1.12467"
                  stroke="#333333"
                  strokeWidth="2"
                />
              </svg>
            )}
            {!mobile && (
              <Link
                locale={lang}
                href={asPath}
                className={
                  currentLang === lang
                    ? `text-neutral-darker p-1 font-jost font-medium text-xl leading-7 tracking-tighter`
                    : `text-secondary-darker p-1 font-jost font-medium text-xl leading-7 tracking-tighter`
                }
              >
                {fullLanguages[lang.split('-')[0]]}
              </Link>
            )}
            {currentLang != lang && mobile && (
              <Link locale={lang} href={asPath}>
                {' '}
                {lang.split('-')[0].toUpperCase()}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

LangButtons.displayName = 'LangButtons'

export default LangButtons
