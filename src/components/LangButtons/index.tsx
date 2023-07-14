import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import className from './langButtonsStyles'
import { ReactNode } from 'react'
import { LanguageButtonProps } from './langButtons.types'
import { FC } from 'react'
import MenuCheck from '@/components/MenuCheck'

const { menu, ul, menuMobile, linkMenuMobile, linkMenu, ulMobile } = className

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
            {!mobile && currentLang === lang && <MenuCheck />}
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
            {mobile && currentLang !== lang && (
              <Link
                locale={lang}
                href={asPath}
                className="text-secondary-darker hover:text-neutral-darker ml-2 w-[30px]"
              >
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
