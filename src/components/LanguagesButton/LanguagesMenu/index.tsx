import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import className from './languagesMenuStyles'
import { ReactNode } from 'react'
import { LangMenuProps } from './languagesMenu.types'
import { FC } from 'react'
import MenuCheck from '@/components/LanguagesButton/IconsComponents/MenuCheck'

const { menu, liMenu, linkMenu, ulMenu } = className

const LanguagesMenu: FC<LangMenuProps> = () => {
  const { asPath } = useRouter()

  const { currentLang, langs } = useTranslations()

  const fullLanguages: { [key: string]: ReactNode } = {
    en: 'English',
    pt: 'Português',
    es: 'Español',
  }

  return (
    <div className={menu} data-testid="langButtonsMenu">
      <ul className={ulMenu}>
        {langs!.map((lang) => (
          <li key={lang} className={liMenu}>
            {currentLang === lang && <MenuCheck />}
            {
              <Link
                locale={lang}
                href={asPath}
                className={`${linkMenu}
                  ${
                    currentLang === lang
                      ? 'text-neutral-darker'
                      : 'text-secondary-darker'
                  }
                `}
              >
                {fullLanguages[lang.split('-')[0]]}
              </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

LanguagesMenu.displayName = 'LanguagesMenu'

export default LanguagesMenu
