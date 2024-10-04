import styles from './Card.module.css'
import PropTypes from 'prop-types'
import GitHub from '../assets/github.svg'
import Olho from '../assets/olho.svg'
function Card({foto, nome, comentario, linkGit, linkPage, tech01, tech02, tech03, tech04, tech05}) {
  
  return (
    <div className={styles.card}>
      <div className={styles.boxTexto}>
        <h1 className={styles.h1Titulo}>{nome}</h1>
        <h2 className={styles.h2Descricao}>{comentario}</h2>
        <div className={styles.boxTech}>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={tech01} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={tech02} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={tech03} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={tech04} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={tech05} alt="" /></div>
        </div>
        <div className={styles.boxBotao}>
          <a href={linkGit} className={styles.button}><img className={styles.buttonImg} src={GitHub}/></a>
          <a href={linkPage} className={styles.button}><img className={styles.buttonImg} src={Olho}/></a>
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
  tech01: PropTypes.string,
  tech02: PropTypes.string,
  tech03: PropTypes.string,
  tech04: PropTypes.string,
  tech05: PropTypes.string,
};

export default Card