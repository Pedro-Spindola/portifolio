import styles from "./Principal.module.css"
import Container from "../components/Container"

function Principal() {
  return (
    <section className={styles.principal} id="principal" >
      <Container className={styles.container}>
        <h1 className={styles.h1}>Pedro Henrique Spindola.</h1>
        <h2 className={styles.h2}>Desenvolvedor Front-End</h2>
      </Container>
    </section>
  )
}

export default Principal