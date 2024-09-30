import styles from "./Navbar.module.css"
import Logo from "../assets/logo.png"
import IconeHome from "../assets/home.svg"
import IconeSobre from "../assets/sobre.svg"
import IconeProjetos from "../assets/projetos.svg"
import IconeContato from "../assets/contato.svg"

const Navbar = () => {
  return (
    <section className={styles.navbar}>
        <nav className={styles.nav}>
          <div className={styles.lineMenu}>
            <a className={styles.link} href="#principal"><img className={styles.img} alt="" src={IconeHome}/><h2 className={styles.h2Nav}>Início</h2></a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} href="#home"><img className={styles.img} alt="" src={IconeSobre}/><h2 className={styles.h2Nav}>Sobre</h2></a>
          </div>
          <div className={styles.boxFoto}>
            <img className={styles.imgPerfil} src={Logo}></img>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} href="#projeto"><img className={styles.img} alt="" src={IconeProjetos}/><h2 className={styles.h2Nav}>Projetos</h2> </a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} href="#contato"><img className={styles.img} alt="" src={IconeContato}/><h2 className={styles.h2Nav}>Contato</h2> </a>
          </div>
        </nav>
    </section>
  )
}

export default Navbar