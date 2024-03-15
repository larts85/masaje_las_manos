import { FC } from 'react'
import style from './banner.module.css'

const LineTwo: FC = () => {
  return (
    <div className={`max-w-1440px ${style.lineTwo}`}>
      <svg
        className="max-w-[1440px]"
        width="100vw"
        height="auto"
        viewBox="0 50 1440 375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-65.9241 0.292397C-49.1524 32.6359 382.436 608.119 911.525 345.804C1440.61 83.4881 1779.84 97.1513 2026.63 255.206"
          stroke="#068A8F"
          strokeWidth="1.11256"
          strokeMiterlimit="10"
        >
          <animate
            attributeName="d"
            values=" 
          M-65.9241 0.292397C-49.1524 32.6359 382.436 608.119 911.525 345.804C1440.61 83.4881 1779.84 97.1513 2026.63 255.206; 
          M-500.9241 500.292397C-49.1524 -200.6359 382.436 500.119 911.525 370.804C1440.61 200.4881 1779.84 -501.1513 2026.63 255.206;
          M-65.9241 0.292397C-49.1524 32.6359 382.436 608.119 911.525 345.804C1440.61 83.4881 1779.84 97.1513 2026.63 255.206"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
export default LineTwo
