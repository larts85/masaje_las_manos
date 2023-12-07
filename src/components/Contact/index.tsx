import { FC } from 'react'
import style from './contact.module.css'
import Form from './Form'
import Lines from './BackGround/Lines'
import FlowerOne from './BackGround/Flower1'
import FlowerFour from './BackGround/Flower4'
import FlowerTwo from './BackGround/Flower2'
import FlowerFive from './BackGround/Flower5'
import FlowerSix from './BackGround/Flower6'
import FlowerSeven from './BackGround/Flower7'
import Vase from './BackGround/Vase'
import FlowerThree from './BackGround/Flower3'

const ContactContent: FC = () => {
  return (
    <div>
      <div className={style.container}>
        <FlowerThree />
        <Form />
        <div className={style.topBackground}>
          <FlowerOne />
          <FlowerTwo />
          <Lines />
        </div>
        <div className={style.buttonBackground}>
          <FlowerFour />
          <FlowerFive />
          <FlowerSix />
          <FlowerSeven />
        </div>
        <Vase />
      </div>
    </div>
  )
}

ContactContent.displayName = 'ContactContent'
export default ContactContent
