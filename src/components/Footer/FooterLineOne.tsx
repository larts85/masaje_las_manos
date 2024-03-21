import { FC } from 'react'
import style from './footer.module.css'

const FooterLineOne: FC = () => {
  return (
    <div className={`${style.footerLineOne}`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 -10 1440 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-315.64 384.684C-301.233 357.412 91.7022 -136.852 657.091 39.2196C1222.48 215.292 1569.26 181.246 1808.73 36.7999"
          stroke="#068A8F"
          strokeWidth="1.11256"
          strokeMiterlimit="10"
        >
          <animate
            attributeName="d"
            values="
          M-315.64 384.684C-301.233 357.412 91.7022 -136.852 657.091 39.2196C1222.48 215.292 1569.26 181.246 1808.73 36.7999;
          M-6830.64 200.684C-301.233 490.412 91.7022 -70.852 657.091 20.2196C1222.48 115.292 1069.26 221.246 1808.73 150.7999;
          M-315.64 384.684C-301.233 357.412 91.7022 -136.852 657.091 39.2196C1222.48 215.292 1569.26 181.246 1808.73 36.7999"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
export default FooterLineOne
