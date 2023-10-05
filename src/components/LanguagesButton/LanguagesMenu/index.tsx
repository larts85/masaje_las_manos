import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import className from './languagesMenuStyles'
import { ReactNode } from 'react'
import { LangMenuProps } from './languagesMenu.types'
import { FC } from 'react'
import MenuCheck from '@/components/LanguagesButton/IconsComponents/MenuCheck'

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
                    ? `text-neutral-darker font-jost font-medium text-[9px] sm:text-[1.5vw] leading-[2.5vw] tracking-tighter`
                    : `text-secondary-darker font-jost  text-[9px] sm:text-[1.5vw] leading-[2.5vw]  tracking-tighter`
                }
              >
                {fullLanguages[lang.split('-')[0]]}
              </Link>
            )}
            {isMobile && currentLang !== lang && (
              <Link locale={lang} href={asPath}>
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
