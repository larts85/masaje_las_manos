import { FC } from 'react'

const LineTwo: FC = () => {
  return (
    <svg
      width="100vw"
      height="auto"
      viewBox="0 50 1440 415"
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
          M-65.9241 80.992397C-49.1524 100.6359 282.436 580.119 911.525 300.804C1440.61 100.4881 1779.84 400.1513 2026.63 455.206;
          M-65.9241 0.292397C-49.1524 32.6359 382.436 608.119 911.525 345.804C1440.61 83.4881 1779.84 97.1513 2026.63 255.206"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
export default LineTwo
