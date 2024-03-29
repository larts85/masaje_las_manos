import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import className from './languagesMenuStyles'
import { ReactNode } from 'react'
import { LangMenuProps } from './languagesMenu.types'
import { FC } from 'react'
import MenuCheck from '@/components/IconsComponents/MenuCheck'

const { menu, ul, menuMobile, linkMenuMobile, linkMenu, ulMobile } = className

const LanguagesMenu: FC<LangMenuProps> = ({ isMobile = false }) => {
  const { asPath } = useRouter()

  const { currentLang, langs } = useTranslations()

  const fullLanguages: { [key: string]: ReactNode } = {
    en: 'English',
    pt: 'Português',
    es: 'Español',
  }

  return (
    <div className={isMobile ? menuMobile : menu} data-testid="langButtonsMenu">
      <ul className={isMobile ? ulMobile : ul}>
        {langs!.map((lang) => (
          <li key={lang} className={isMobile ? linkMenuMobile : linkMenu}>
            {!isMobile && currentLang === lang && <MenuCheck />}
            {!isMobile && (
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
            {isMobile && currentLang !== lang && (
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

LanguagesMenu.displayName = 'LanguagesMenu'

export default LanguagesMenu
