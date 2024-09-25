import styles from "./Navbar.module.css"
import Container from "./Container"
import FotoPerfil from "../assets/perfil.jpg"
import IconeHome from "../assets/home.svg"
import IconeSobre from "../assets/sobre.svg"
import IconeProjetos from "../assets/projetos.svg"
import IconeContato from "../assets/contato.svg"

const anoAtual = new Date().getFullYear();

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <Container className={styles.container}>
        <div className={styles.boxRecua}>

        </div>
        <div className={styles.boxSobre}>
          <div className={styles.boxFoto}>
            <img className={styles.imgPerfil} src={FotoPerfil}></img>
          </div>
        </div>
        <div className={styles.boxTexto}>
            <h1 className={styles.h1}>Pedro Spíndola</h1>
            <h2 className={styles.h2}>Desenvolvedor Front-End</h2>
          </div>
        <nav className={styles.nav}>
          <div className={styles.lineMenu}>
            <a className={styles.link} to="/"> <img className={styles.img} src={IconeHome} alt=""/> <h2 className={styles.h2Nav}>Início</h2></a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to="/sobre">  <img className={styles.img} src={IconeSobre} alt=""/> <h2 className={styles.h2Nav}>Sobre</h2></a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to="/projetos"> <img className={styles.img} src={IconeProjetos} alt=""/> <h2 className={styles.h2Nav}>Projetos</h2> </a>
          </div>
          <div className={styles.lineMenu}>
            <a className={styles.link} to="/contato"> <img className={styles.img} src={IconeContato} alt=""/> <h2 className={styles.h2Nav}>Contato</h2> </a>
          </div>
        </nav>
        <div className={styles.footer}>
          <div className={styles.direitos}>
            <h2>© DEV.SPINDOLA 2022 - {anoAtual} Todos os direitos reservados</h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Navbar