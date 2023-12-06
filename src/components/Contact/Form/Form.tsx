import { FC } from 'react'
import className from './form.styles'
import styles from '../contact.module.css'
import FlowerThree from '../BackGround/Flower3'

const Form: FC = () => {
  return (
    <form className={styles.form}>
      <h2 className={className.h2}>Formulario de Contacto</h2>
      <FlowerThree />
    </form>
  )
}

export default Form
