import styles from './ButtonEnviarEmail.module.css'
import SetaIcon from '../assets/setaIcon.svg'

const ButtonEnviarEmail = () => {
  return (
    <button className={styles.btnEnviar}>
        <img className={styles.seta} src={SetaIcon} alt="" />
        <h2 className={styles.h2} >Enviar</h2>
    </button>
  )
}

export default ButtonEnviarEmail