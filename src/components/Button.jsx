import styles from './Button.module.css'
import PropTypes from 'prop-types';

function Button({imagem, texto, link}) {
  return (
    <a href={link} className={styles.button}>
      <img src={imagem} alt={texto} />
      {texto}
    </a>
  )
}

Button.propTypes = {
  imagem: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button