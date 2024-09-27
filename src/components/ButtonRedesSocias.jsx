import styles from './ButtonRedesSocias.module.css'
import PropTypes from 'prop-types'

/* 
.a -> Cor das bordas
.a::after -> Cor de fundo
.a::before -> Cor efeito gradiente das bordas, caso necessario ( background-image: linear-gradient(to right, #ffffff00, #ffffff00, -- Cor desejada --, #ffffff00, #ffffff00); )
.h2 -> Cor do texto
*/

const ButtonRedesSocias = ({icon, link, texto, setStyles, setStylesH2}) => {

  const appliedStyles = `${styles.a} ${setStyles ? setStyles : ''}`.trim();
  const appliedStylesH2 = `${styles.h2} ${setStylesH2 ? setStylesH2 : ''}`.trim();

  return (
    <a className={appliedStyles} href={link}>
      <img className={styles.icone} src={icon} alt="" />
      <h2 className={appliedStylesH2}>{texto}</h2>
    </a>
  )
}

ButtonRedesSocias.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  setStyles: PropTypes.string,
  setStylesH2: PropTypes.string
};

export default ButtonRedesSocias