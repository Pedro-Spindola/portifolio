import styles from "./Navbar.module.css"
import Logo from "../assets/logo.png"
import IconeHome from "../assets/home.svg"
import IconeSobre from "../assets/sobre.svg"
import IconeProjetos from "../assets/projetos.svg"
import IconeContato from "../assets/contato.svg"

/*
const anoAtual = new Date().getFullYear();

        <div className={styles.footer}>
          <div className={styles.direitos}>
            <h2>© DEV.SPINDOLA 2022 - {anoAtual} Todos os direitos reservados</h2>
          </div>
        </div>
        */
const Navbar = () => {
  return (
    <section className={styles.navbar}>
        <div className={styles.boxFoto}>
          <img className={styles.imgPerfil} src={Logo}></img>
        </div>
        <nav className={styles.nav}>
          <div className={styles.lineMenu}>
            <a className={styles.link} to=""> <img className={styles.img} alt=""/> <h2 className={styles.h2Nav}>Início</h2></a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to="">  <img className={styles.img} alt=""/> <h2 className={styles.h2Nav}>Sobre</h2></a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to=""> <img className={styles.img} alt=""/> <h2 className={styles.h2Nav}>Projetos</h2> </a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to=""> <img className={styles.img} alt=""/> <h2 className={styles.h2Nav}>Contato</h2> </a>
          </div>
        </nav>
    </section>
  )
}

export default Navbar