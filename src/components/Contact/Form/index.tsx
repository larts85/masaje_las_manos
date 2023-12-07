import { FC } from 'react'
import className from './form.styles'
import styles from '../contact.module.css'
import FlowerThree from '../BackGround/Flower3'

const Form: FC = () => {
  return (
    <form className={styles.form}>
      <h2 className={className.h2}>Formulario de Contacto</h2>
      <label className={className.labels}>Tu nombre (requerido)</label>
      <input className={className.inputs}></input>
      <label className={className.labels}>Tu Email (requerido)</label>
      <input className={className.inputs}></input>
      <label className={className.labels}>Asunto</label>
      <input className={className.inputs}></input>
      <label className={className.labels}>Mensaje</label>
      <input className={className.inputMessage}></input>
      <FlowerThree />
    </form>
  )
}

export default Form
