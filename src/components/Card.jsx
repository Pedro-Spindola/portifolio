import styles from './Card.module.css'
import PropTypes from 'prop-types'
import GitHub from '../assets/github.svg'
import Olho from '../assets/olho.svg'

function Card({foto, nome, comentario, linkGit, linkPage}) {
  
  return (
    <div className={styles.card}>
      <div className={styles.boxTexto}>
        <h1 className={styles.h1Titulo}>{nome}</h1>
        <h2 className={styles.h2Descricao}>{comentario}</h2>
        <div className={styles.boxTech}>
        </div>
        <div className={styles.boxBotao}>
          <a href={linkGit} className={styles.button}><img className={styles.buttonImg} src={GitHub}/>GitHub</a>
          <a href={linkPage} className={styles.button}><img className={styles.buttonImg} src={Olho}/>Projeto</a>
        </div>
      </div>
      <div className={styles.boxFoto}>
        <img className={styles.boxFotoImg} src={foto} alt="" />
      </div>
    </div>
  )
}

Card.propTypes = {
  foto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  linkGit: PropTypes.string.isRequired,
  linkPage: PropTypes.string.isRequired,
};

export default Card