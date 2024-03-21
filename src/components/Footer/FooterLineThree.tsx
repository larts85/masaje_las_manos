import { FC } from 'react'
import style from './footer.module.css'

const FooterLineThree: FC = () => {
  return (
    <div className={`${style.footerLineThree}`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 95 1440 421"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M-186.396 -900.682C-176.894 999.957 209.384 -80.2069 836.901 240.185C1264.42 440.162 1799.56 76.0843 1955.12 1.2408"
          stroke="#FFF5E6"
          strokeMiterlimit="10"
        >
          <animate
            attributeName="d"
            values="
          M-186.396 330.682C-176.894 316.057 209.384 48.2069 836.901 214.185C1464.42 380.162 1799.56 76.0843 1955.12 1.2408;
          M-186.396 -900.682C-176.894 999.957 209.384 -80.2069 836.901 240.185C1264.42 440.162 1799.56 76.0843 1955.12 1.2408;
          M-186.396 330.682C-176.894 316.057 209.384 48.2069 836.901 214.185C1464.42 380.162 1799.56 76.0843 1955.12 1.2408"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
export default FooterLineThree
