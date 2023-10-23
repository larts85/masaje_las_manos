import { FC } from 'react'

const LineOneAnimate: FC = () => {
  return (
    <div className="relative top-[-43.2vw]">
      <svg
        width="100vw"
        height="auto"
        viewBox="0 30 1440 656"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1809.74 479.968C1803.84 467.005 1424.84 242.904 784.394 577.383C143.949 911.861 -222.589 62.5638 -310.456 1.22218"
          stroke="#07BAC1"
          strokeWidth="1.11256"
          strokeMiterlimit="10"
        >
          <animate
            attributeName="d"
            values=" 
              M1809.74 479.968C1803.84 467.005 1424.84 242.904 784.394 577.383C143.949 911.861 -222.589 62.5638 -310.456 1.22218; 
              M1840.32 91.168C1207.5 850.072 1166.67 260 607 620.552C147.33 897.921 -524.263 100.3985 -60.84038 500.74235; 
              M1809.74 479.968C1803.84 467.005 1424.84 242.904 784.394 577.383C143.949 911.861 -222.589 62.5638 -310.456 1.22218"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
export default LineOneAnimate
