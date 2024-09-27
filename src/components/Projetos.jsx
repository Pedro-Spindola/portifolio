import styles from "./Projetos.module.css"
import Container from "./Container"
import Card from "./Card"
import Foto from "../assets/perfil.jpg"

const Projetos = () => {

  return (
    <section className={styles.projetos}>
      <Container className={styles.container}>
        <h1 className={styles.tituloProjeto}>PROJETOS</h1>
        <div className={styles.boxProjetos}>
            <Card className={styles.card} foto={Foto} numeroProjeto="01" nome="Projeto 01" comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus." linkGit="" linkPage=""/>
            <Card className={styles.card} foto={Foto} numeroProjeto="01" nome="Projeto 01" comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus." linkGit="" linkPage=""/>
            <Card className={styles.card} foto={Foto} numeroProjeto="01" nome="Projeto 01" comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus." linkGit="" linkPage=""/>
            <Card className={styles.card} foto={Foto} numeroProjeto="01" nome="Projeto 01" comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus." linkGit="" linkPage=""/>
        </div>
      </Container>
    </section>
  );
};


export default Projetos