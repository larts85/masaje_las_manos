import { FC } from 'react'
import style from './footer.module.css'

const FooterLineTwo: FC = () => {
  return (
    <div className={`${style.footerLineTwo}`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 150 1740 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-167.783 341.217C-161.868 332.823 223.805 183.285 882.653 387.215C1541.5 591.144 1908.17 41.509 1997.49 0.830385"
          stroke="#785825"
          strokeWidth="1.11256"
          strokeMiterlimit="10"
        >
          <animate
            attributeName="d"
            values="
          M-167.783 341.217C-161.868 332.823 223.805 183.285 882.653 387.215C1541.5 591.144 1908.17 41.509 1997.49 0.830385;
          M0.783 301.217C-161.868 125.823 223.805 350.285 882.653 380.215C1541.5 400.144 1908.17 600.509 1997.49 0.830385;
          M-167.783 341.217C-161.868 332.823 223.805 183.285 882.653 387.215C1541.5 591.144 1908.17 41.509 1997.49 0.830385"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
export default FooterLineTwo
