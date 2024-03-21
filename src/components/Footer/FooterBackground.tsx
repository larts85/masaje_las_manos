import { FC } from 'react'
import style from './footer.module.css'

const FooterBackground: FC = () => {
  return (
    <div className={`${style.footerBackground} w-full`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" // Ajusta el contenido verticalmente sin espacios adicionales
      >
        <path
          d="M0 57.5247C0 57.5247 213 -71.9059 720 57.5247C1227 186.955 1440 57.5247 1440 57.5247V471H720H0V57.5247Z"
          fill="#F8D498"
        />
      </svg>
    </div>
  )
}
export default FooterBackground
