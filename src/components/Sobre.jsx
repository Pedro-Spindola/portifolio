import styles from "./Sobre.module.css"
import Container from "../components/Container"

function Sobre() {
  return (
    <section className={styles.sobre}>
      <Container className={styles.container}>
      <h1 className={styles.h1}>Sobre</h1>
        <h2 className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus. Morbi ullamcorper libero ut est dictum congue. Maecenas vitae quam eu quam rutrum maximus tempor quis nisi. Aliquam eget arcu ac urna viverra interdum sit amet nec nulla. Nulla sit amet orci in nunc euismod consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam mollis dui at metus dapibus, quis congue eros pellentesque. Aenean sed erat at leo feugiat interdum. Quisque finibus quis ex ac condimentum. Nullam eget ipsum tortor.</h2>
      </Container>
    </section>
  )
}

export default Sobre