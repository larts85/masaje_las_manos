import { FC } from 'react'
import style from './content.module.css'

const ContentBackground: FC = () => {
  return (
    <div className={style.background}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 3455"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1494.14 2429.7L1491.92 3454L707 3452.3C1279.43 3028.51 953.917 2714 709.22 2428C896 2574 1131.91 2664.54 1494.14 2429.7Z"
          fill="url(#paint0_linear_210_7204)"
        />
        <path
          d="M61.6124 2470.73C-31.9963 2994.15 -400.847 846.241 75.6387 1071.28C552.124 1296.32 1410 735 757.5 1091.5C105 1448 428 2069 758.952 2477.72C758.952 2477.72 155.221 1947.31 61.6124 2470.73Z"
          fill="url(#paint1_linear_210_7204)"
        />
        <path
          d="M1646.28 1.70105L1644.06 1026C1452.67 898.227 1313 889 861.138 1026.5C1535 737 1024.96 315.361 861.364 2.76087e-06L1646.28 1.70105Z"
          fill="url(#paint2_linear_210_7204)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_210_7204"
            x1="1613.08"
            y1="3043.33"
            x2="828.16"
            y2="3041.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.046875" stopColor="#FFF5E5" />
            <stop offset="0.755208" stopColor="#C1EDEF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_210_7204"
            x1="50.2734"
            y1="1771.39"
            x2="747.613"
            y2="1778.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.046875" stopColor="#FFF5E5" />
            <stop offset="0.755208" stopColor="#C1EDEF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_210_7204"
            x1="1561"
            y1="-239"
            x2="1941"
            y2="665"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.046875" stopColor="#FFF5E5" />
            <stop offset="0.755208" stopColor="#C1EDEF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
export default ContentBackground
