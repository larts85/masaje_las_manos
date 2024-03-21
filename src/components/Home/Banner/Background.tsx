import { FC } from 'react'
import style from './banner.module.css'

const Background: FC = () => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 1440 1012"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style.background}`}
    >
      <path
        d="M-1 926.783C-1 926.783 142 1117.07 719 926.783C1296 736.5 1439 926.783 1439 926.783V-1.99994H719H-1V926.783Z"
        fill="#FFF5E6"
      />
    </svg>
  )
}
export default Background
