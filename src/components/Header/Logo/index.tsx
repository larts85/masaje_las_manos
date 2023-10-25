import { FC } from 'react'
import { VARIANT } from '@/types/globals.types'
import { StyleVariants, LogoProps } from './logo.types'

const Logo: FC<LogoProps> = ({ variant = VARIANT.PRIMARY }) => {
  const logoStyleVariants: StyleVariants = {
    [VARIANT.PRIMARY]: {
      light: '#88DBDF',
      base: '#07BAC1',
      darker: '#068A8F',
    },
    [VARIANT.SECONDARY]: {
      light: '#FDEAC9',
      base: '#F8D498',
      darker: '#785825',
    },
    [VARIANT.NEUTRAL]: {
      light: '#C5C5C5',
      base: '#7B7B7B',
      darker: '#333333',
    },
  }

  const logoColor = () => {
    if (variant === VARIANT.SECONDARY) {
      return 'darker'
    } else return 'base'
  }
  const colorName = logoColor()
  return (
    <div className="flex justify-start gap-[2px] items-center px-[1vw]">
      <svg
        width="4vw"
        height="auto"
        viewBox="0 0 73 43"
        role="svg"
        fill="none"
        data-testid="logo"
      >
        <path
          d="M36.192 0C34.0056 2.4272 27.7672 10.1356 27.7672 19.0921C27.7672 28.047 34.0048 35.757 36.192 38.1842C38.3784 35.7562 44.6168 28.047 44.6168 19.0921C44.6168 10.1356 38.3784 2.4272 36.192 0Z"
          fill={logoStyleVariants[variant].light}
        />
        <path
          d="M19.4764 4C21.1116 4.83505 24.538 6.76958 27.79 9.79152C26.5964 12.6945 25.7444 15.9825 25.7452 19.4939C25.7452 27.8991 30.5716 35.0432 33.4596 38.5691C33.4596 38.5691 33.178 39.3632 33.0628 39.6646C30.1572 38.1865 21.5932 33.2389 18.4012 24.857C15.214 16.492 18.298 7.05248 19.4764 4Z"
          fill={logoStyleVariants[variant].base}
        />
        <path
          d="M54.0584 24.857C57.2456 16.4928 54.164 7.05329 52.9848 4C51.3496 4.83505 47.9216 6.76958 44.6696 9.79152C45.8632 12.6945 46.716 15.9825 46.716 19.4931C46.716 27.8983 41.8904 35.0424 39 38.5683C39.1448 38.9854 39.2808 39.3624 39.3976 39.6613C42.3048 38.1809 50.8736 33.2196 54.0584 24.857Z"
          fill={logoStyleVariants[variant].base}
        />
        <path
          d="M16.88 26.8286C15.0136 26.2821 12.9792 26 10.808 26C6.0808 26 1.8656 27.3197 0 27.9996C1.336 30.7387 5.6168 38.4036 12.9496 41.3798C15.2536 42.3113 17.8616 42.7871 20.7032 42.7871C25.3864 42.7871 29.5616 41.4955 31.4528 40.8075C28.268 39.1607 20.648 34.5796 16.88 26.8286Z"
          fill={logoStyleVariants[variant].darker}
        />
        <path
          d="M61.6464 26C59.4736 26 57.4408 26.2829 55.5728 26.8286C51.8048 34.5804 44.1856 39.1615 41 40.8083C42.8912 41.4955 47.0672 42.7879 51.7496 42.7879C54.592 42.7879 57.2 42.3121 59.5032 41.3806C66.836 38.4044 71.1168 30.7395 72.4528 28.0004C70.588 27.3197 66.372 26 61.6464 26Z"
          fill={logoStyleVariants[variant].darker}
        />
      </svg>

      <h1
        className={`whitespace-nowrap font-jost text-primary-base text-[7px] text-${variant}-${colorName} sm:text-[9px] md:text-[12px] lg:text-[15px] xl:text-[20px]`}
      >
        THE HANDS MASSAGE
      </h1>
    </div>
  )
}

Logo.displayName = 'Logo'

export default Logo
