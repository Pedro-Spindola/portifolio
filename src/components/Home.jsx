import styles from "./Home.module.css"
import Container from "../components/Container"
import CSharp from "../assets/cSharp.svg"
import Css from "../assets/css.svg"
import Git from "../assets/git.svg"
import Html from "../assets/html.svg"
import Java from "../assets/java.svg"
import JavaScript from "../assets/javaScript.svg"
import ReactIcone from "../assets/react.svg"

const Home = () => {
  return (
    <section className={styles.home}>
      <Container className={styles.container}>
        <h1 className={styles.h1}>Transformo ideias em soluções criativas e funcionais.</h1>
        <h3 className={styles.h3}>Cada projeto é uma oportunidade de criar algo único. Ofereço soluções personalizadas que atendem às necessidades específicas de cada projeto, com um olhar atento aos detalhes e uma abordagem centrada no resultado. Meu objetivo é transformar suas ideias em realidade, entregando soluções que combinam inovação, estética e funcionalidade. Navegue pelo meu portfólio e descubra como posso ajudar a dar vida à sua visão.</h3>
        <h2 className={styles.h2}>Minhas stack de tecnologias</h2>
        <div className={styles.boxTech}>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={CSharp} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={Css} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={Git} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={Html} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={Java} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={JavaScript} alt="" /></div>
          <div className={styles.boxIcone}><img className={styles.imgIcone} src={ReactIcone} alt="" /></div>
        </div>
      </Container>
    </section>
  )
}

export default Home