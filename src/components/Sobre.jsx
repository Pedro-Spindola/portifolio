import styles from "./Sobre.module.css"
import Container from "../components/Container"

function Sobre() {
  return (
    <section className={styles.sobre}>
      <Container className={styles.container}>
      <h1 className={styles.h1}>Sobre</h1>
        <h2 className={styles.h2}>Sou Pedro Henrique Spindola, desenvolvedor front-end focado em transformar ideias em soluções criativas. Com experiência em HTML, CSS, JavaScript e React, busco sempre entregar projetos funcionais e esteticamente agradáveis. Valorizo a comunicação clara e a colaboração para entender as necessidades de cada cliente, sempre em busca de inovação e qualidade em meu trabalho. Vamos conversar sobre como posso ajudar a dar vida às suas ideias!</h2>
      </Container>
    </section>
  )
}

export default Sobre